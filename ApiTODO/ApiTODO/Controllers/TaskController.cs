using System.Collections;
using System.Collections.Generic;
using System.Linq;
using ApiTODO.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Task = ApiTODO.Models.Task;


namespace ApiTODO.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class TaskController : ControllerBase
    {
        private readonly ITaskRepository repository;
        private readonly UserManager<User> userManager;
        public TaskController(ITaskRepository repository, UserManager<User> userManager)
        {
            this.repository = repository;
            this.userManager = userManager;
        }

        [HttpPost]
        [Route("AddTask")]
        public IActionResult AddTask(Task taskView)
        {
            Task task = new Task
                {
                    Message = taskView.Message,
                    TaskListId = taskView.TaskListId
                };
                repository.SaveTask(task);
                return Ok();
        }

        [HttpPost]
        [Route("DeleteTask")]
        public IActionResult DeleteTask(Task taskViewModel)
        {
            var task = repository.Tasks.FirstOrDefault(x => x.Id == taskViewModel.Id);
            repository.DeleteTask(task);
            return Ok();
        }

        [HttpGet]
        [Route("TasksForList/{listId}")]
        public IActionResult GetTasksForList([FromRoute]int listId)
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var tasks = repository.Tasks
                .Where(t => t.TaskList.UserId == userId)
                .Where(x=>x.TaskListId == listId).ToList();
            return Ok(tasks);
        }

        [HttpPost]
        [Route("EditTask")]
        public IActionResult EditTask(Task taskView)
        {
            Task task = new Task
            {
                Id = taskView.Id,
                Message = taskView.Message,
                TaskListId = taskView.TaskListId
            };
            repository.SaveTask(task);
            return Ok();
        }
    }
}