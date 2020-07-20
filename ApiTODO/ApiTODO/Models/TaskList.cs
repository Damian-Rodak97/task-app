using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiTODO.Models
{
    public class TaskList
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public User User { get; set; }
        public string UserId { get; set; }
    }
}
