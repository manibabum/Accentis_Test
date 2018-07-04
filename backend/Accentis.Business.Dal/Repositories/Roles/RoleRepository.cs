using Accentis.Business.Contracts.Repositories.Roles;
using Accentis.Database.Domain.Domain;
using Microsoft.AspNetCore.Identity;

namespace Accentis.Business.Dal.Repositories.Roles
{
   public class RoleRepository:IRoleRepository
    {
        protected Accentis_NewContext context;
        private readonly RoleManager<IdentityRole> _RoleManager;

        public RoleRepository(Accentis_NewContext _context)
        {
            context = _context;
        }

        //public List<IdentityRole> GetAllRoles()
        //{
        //    //var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));
        //    var roles = _RoleManager.Roles.ToList();
        //    return roles;
        //}
    }
}
