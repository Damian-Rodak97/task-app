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
        public IActionResult AddTask(TaskViewModel taskViewModel, int taskListId)
        {
            
            foreach (var taskView in taskViewModel.Tasks)
            {
                Task task = new Task
                {
                    Message = taskView.Message,
                    TaskListId = taskListId
                };
                repository.SaveTask(task);
            }
            return Ok();
        }

        [HttpPost]
        [Route("DeleteTask")]
        public IActionResult DeleteTask(int id)
        {
            var task = repository.Tasks.FirstOrDefault(x => x.Id == id);
            repository.DeleteTask(task);
            return Ok();
        }
    }
}