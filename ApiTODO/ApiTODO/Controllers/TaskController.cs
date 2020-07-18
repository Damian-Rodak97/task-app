using System;
using System.Linq;
using System.Threading.Tasks;
using ApiTODO.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Task = ApiTODO.Models.Task;


namespace ApiTODO.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly ITaskRepository repository;
        private readonly UserManager<User> userManager;
        public TaskController(ITaskRepository repository, UserManager<User> userManager)
        {
            this.repository = repository;
            this.userManager = userManager;
        }
        [HttpGet]
        [Authorize]
        public async Task<Object> GetTask()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await userManager.FindByIdAsync(userId);
            return new
            {
                user.FullName,
                user.Email,
                user.UserName
            };
        }


        [HttpPost]
        [Route("AddTask")]
        public IActionResult AddTask(TaskViewModel taskViewModel)
        {
            var userId = userManager.GetUserId(HttpContext.User);
            Task task = new Models.Task
                {
                    Message = taskViewModel.Message,
                    UserId = userId
                };
            repository.SaveTask(task);
            return Ok();
        }

        [HttpPost]
        [Route("DeleteTask")]
        public IActionResult DeleteTask(int id)
        {
            var task = repository.Tasks.FirstOrDefault(x => x.Id == id);
            repository.DelateTask(task);
            return Ok();
        }
    }
}