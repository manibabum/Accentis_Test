using Accentis.Business.Contracts.Services.Roles;
using Accentis.Database.Domain.Domain;

namespace Accentis.Business.Services.Roles
{
   public class RoleService:IRoleService
    {
        protected Accentis_NewContext context;

        public RoleService(Accentis_NewContext _context)
        {
            context = _context;
        }

        //public List<IdentityRole> GetAllRoles()
        //{
        //    using (var unitOfWork = new UnitOfWork(context))
        //    {
        //        return unitOfWork.RoleRepository.GetAllRoles();
        //    }
        //}
    }
}
