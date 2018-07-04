using Accentis.Business.Model;
using Accentis.Database.Domain;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Accentis.Business.Contracts.Services.Users
{
    public interface IUserService
    {
        Task<ApplicationUser> CreateUser(UserAddModel user);

        List<AspNetUsers> GetAllUsers();

        List<AspNetUsers> Get();

    }
}
