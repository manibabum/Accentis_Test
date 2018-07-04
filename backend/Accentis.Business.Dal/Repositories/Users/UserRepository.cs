using Accentis.Business.Contracts.Repositories.Designations.Users;
using Accentis.Business.Dal.Repositories.General;
using Accentis.Business.Model;
using Accentis.Database.Domain;
using Accentis.Database.Domain.Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Accentis.Business.Dal.Repositories.Users
{
    public class UserRepository:BaseRepository<AspNetUsers>,IUserRepository
    {
        protected Accentis_NewContext context;
        private readonly UserManager<ApplicationUser> _userManager;
        public UserRepository(Accentis_NewContext _context):base(_context)
        {
            context = _context;
            
        }

        public async Task<ApplicationUser> CreateUser(UserAddModel user)
        {
            try
            {
                var aUser = new ApplicationUser
                {
                    Email = user.Email,
                    FirstName = user.FirstName,
                    MiddelName = user.MiddelName,
                    LastName = user.LastName,
                    Contact = user.Contact,
                    RoleID = user.RoleID,
                    DesignationID = user.DesignationID,
                    Status =true,
                    Delete = false,
                    CreatedDate = DateTime.Now,
                    DesignationName = user.DesignationName,
                    EmailConfirmed = true,
                    UserName = user.UserName,
                    PasswordHash = user.Password,
                    Address = user.Address
                };
                var chkUser = await _userManager.CreateAsync(aUser, user.Password);
                if (chkUser.Succeeded)
                {
                    await _userManager.AddToRoleAsync(aUser, user.RoleName);
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }
            return null;
        }

        public List<AspNetUsers> GetAllUsers()
        {
            var userList = context.AspNetUsers.Include(x=>x.Role).OrderByDescending(x=>x.CreatedDate).Where(x=>x.Delete==false && x.Status==true).ToList();
            return userList;
        }
    }
}
