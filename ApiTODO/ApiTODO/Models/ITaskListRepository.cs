using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiTODO.Models
{
    public interface ITaskListRepository
    {
        IQueryable<TaskList> TaskLists { get; }
        void SaveTaskList(TaskList taskList);
        TaskList DeleteTaskList(TaskList taskList);
    }
}
