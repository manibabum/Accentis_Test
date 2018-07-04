using System;
using System.Threading.Tasks;
using Accentis.Business.JWT;
using Accentis.Business.Model;
using Accentis.Database.Domain;
using EME.Business.JWT;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Accentis.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/LoginApi")]
    public class LoginApiController : Controller
    {
        private readonly TokenProviderOptions _jwtOptions;
        private readonly UserManager<ApplicationUser> _userManager;

        public LoginApiController(IOptions<TokenProviderOptions> jwtOptions, UserManager<ApplicationUser> userManager)
        {
            _jwtOptions = jwtOptions.Value;
            _userManager = userManager;
        }

        [HttpPost]
        [Route("GenerateToken")]
        public async Task<object> Generatetoken([FromBody]LoginModel model)
        {
            string ApiToken = "";
            var output = new ResponseDetail();
            try
            {
                var current = HttpContext;
                var user = await _userManager.FindByNameAsync(model.UserName);
                if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
                {
                    if (user.Delete == false)
                    {
                        ApiToken = JwtManager.GenerateToken(model.UserName, _jwtOptions);
                        if (ApiToken != null)
                        {
                            output.Data = user;
                            output.access_token = ApiToken;
                            output.Success = true;
                        }
                        else
                        {
                            output.Message = "Error Occured While Token Generated";
                            output.Success = false;
                        }
                        return output;
                    }
                    output.Message = "Error Occured!";
                    output.Success = false;
                    return output;
                }
                output.Message = "Invalid UserName or Password";
                output.Success = false;
                return output;
            }
            catch (Exception ex)
            {
                output.Success = false;
                output.Message = ex.Message;
                return output;
            }
        }
    }
}