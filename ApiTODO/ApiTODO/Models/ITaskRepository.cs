using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiTODO.Models
{
    public interface ITaskRepository
    {
        IQueryable<Task> Tasks { get; }
        void SaveTask(Task task);
        Task DeleteTask(Task task);
    }
}
