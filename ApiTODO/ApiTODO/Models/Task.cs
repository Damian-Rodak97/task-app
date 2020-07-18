using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiTODO.Models
{
    public class Task
    {
        public User User { get; set; }
        public string UserId { get; set; }
        public int Id { get; set; }
        public string Message { get; set; }
    }
}
