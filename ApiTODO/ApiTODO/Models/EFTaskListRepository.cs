using System.Linq;

namespace ApiTODO.Models
{
    public class EFTaskListRepository : ITaskListRepository
    {
        public TaskContext Context;

        public EFTaskListRepository(TaskContext context)
        {
            this.Context = context;
        }

        public IQueryable<TaskList> TaskLists => Context.TaskLists;

        public TaskList DeleteTaskList(TaskList taskList)
        {
            TaskList dbEntryTask = Context.TaskLists
                .FirstOrDefault(t => t.Id == taskList.Id);

            if (dbEntryTask != null)
            {
                Context.TaskLists.Remove(dbEntryTask);
                Context.SaveChanges();
            }
            return dbEntryTask;
        }

        public void SaveTaskList(TaskList taskList)
        {
            if (taskList.Id == 0)
            {
                Context.TaskLists.Add(taskList);
            }
            else
            {
                TaskList dbEntryTask = Context.TaskLists
                    .FirstOrDefault(t => t.Id == taskList.Id);

                if (dbEntryTask != null)
                {
                    dbEntryTask.Id = taskList.Id;
                    dbEntryTask.Name = taskList.Name;
                }
            }
            Context.SaveChanges();
        }

    }
}
