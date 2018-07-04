using Accentis.Business.Contracts.Services.Users;
using Accentis.Business.Dal;
using Accentis.Business.Model;
using Accentis.Database.Domain;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Accentis.Business.Services.Users
{
    public class UserService:IUserService
    {
        public Task<ApplicationUser> CreateUser(UserAddModel user)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.UserRepository.CreateUser(user);
            }
        }

        public List<AspNetUsers> Get()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.UserRepository.Get();
            }
        }

        public List<AspNetUsers> GetAllUsers()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.UserRepository.GetAllUsers();
            }
        }
    }
}
