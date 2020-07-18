using Microsoft.AspNetCore.Identity;

namespace ApiTODO.Models
{
    public class User : IdentityUser
    {
        public string FullName { get; set; }
    }
}
