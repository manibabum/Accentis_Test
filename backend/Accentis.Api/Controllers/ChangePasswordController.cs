using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Accentis.Business.Model;
using Accentis.Database.Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Accentis.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/ChangePassword")]
    public class ChangePasswordController : Controller
    {
        #region Properties
        private readonly UserManager<ApplicationUser> _userManager;
        #endregion

        #region Constructor
        public ChangePasswordController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }
        #endregion

        [Authorize(AuthenticationSchemes ="Bearer")]
        [HttpPost]
        public async Task<object> ChangePassword([FromBody]ChangePasswordModel model)
        {
            var output = new ResponseDetail();

            try
            {
                if (ModelState.IsValid)
                {
                    var user = await _userManager.FindByNameAsync(model.UserName);
                    if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
                    {
                        user.PasswordHash = _userManager.PasswordHasher.HashPassword(user, model.NewPassword);
                        await _userManager.UpdateAsync(user);
                        output.Message = "Password changed successfully!";
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Something went wrong!";
                    output.Success = false;
                    return output;
                }
                output.Message = "Something went wrong!";
                output.Success = false;
                return output;
            }
            catch (Exception ex)
            {
                output.Message = ex.Message;
                output.Success = false;
                return output;
            }
        }
    }
}