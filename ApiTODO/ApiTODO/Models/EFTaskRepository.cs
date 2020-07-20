using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiTODO.Models
{
    public class EFTaskRepository : ITaskRepository
    {
        public TaskContext Context;

        public EFTaskRepository(TaskContext context)
        {
            this.Context = context;
        }

        public IQueryable<Task> Tasks => Context.Tasks;

        public Task DeleteTask(Task task)
        {
            Task dbEntryTask = Context.Tasks
                .FirstOrDefault(t => t.Id == task.Id);

            if (dbEntryTask != null)
            {
                Context.Tasks.Remove(dbEntryTask);
                Context.SaveChanges();
            }
            return dbEntryTask;
        }

        public void SaveTask(Task task)
        {
            if (task.Id == 0)
            {
                Context.Tasks.Add(task);
            }
            else
            {
                Task dbEntryTask = Context.Tasks
                    .FirstOrDefault(t => t.Id == task.Id);

                if (dbEntryTask != null)
                {
                    dbEntryTask.Id = task.Id;
                    dbEntryTask.Message = task.Message;
                }
            }
            Context.SaveChanges();
        }
    }
}
