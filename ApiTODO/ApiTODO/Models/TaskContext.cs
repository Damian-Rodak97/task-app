using Microsoft.EntityFrameworkCore;

namespace ApiTODO.Models
{
    public class TaskContext : DbContext
    {
        public TaskContext(DbContextOptions<TaskContext> options)
            : base(options)
        { }

        public DbSet<Task> Tasks { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<TaskList> TaskLists { get; set; }
    }
}
