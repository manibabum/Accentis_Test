using Accentis.Business.Contracts.Repositories.General;
using Accentis.Business.Model;
using Accentis.Database.Domain;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Accentis.Business.Contracts.Repositories.Designations.Users
{
    public interface IUserRepository:IBaseRepository<AspNetUsers>
    {
        Task<ApplicationUser> CreateUser(UserAddModel user);

        List<AspNetUsers> GetAllUsers();
    }
}
