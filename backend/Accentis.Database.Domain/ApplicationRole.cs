using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace Accentis.Database.Domain
{
    public class ApplicationRole : IdentityRole
    {
        public bool Delete { get;set; }

      
    }
}
