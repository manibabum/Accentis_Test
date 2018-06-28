using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Accentis.Business.Contracts.Services.Users;
using Accentis.Business.Helpers;
using Accentis.Business.Model;
using Accentis.Business.Services.Users;
using Accentis.Database.Domain;
using AutoMapper;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Accentis.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/User")]
    public class UserApiController : Controller
    {
        #region Properties
        private readonly IUserService _userService;
        private readonly UserManager<ApplicationUser> _userManager;
        #endregion

        #region Constructor
        public UserApiController(UserManager<ApplicationUser> userManager)
        {
            _userService = new UserService();
            _userManager = userManager;
        }
        #endregion

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet]
        public object GetList(DataSourceRequest request)
        {
            var response = new ApiErrorDetail();

            try
            {
                var userList = _userService.GetAllUsers();
                var kendoList = userList.ToDataSourceResult(request);
                return kendoList;
            }
            catch (Exception ex)
            {
                return ErrorHelper.KendoCatchBloackResponse(response, ex);
            }
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpPost]
        public async Task<object> Post([FromBody]UserAddModel user)
        {
            var output = new ResponseDetail();
            try
            {
                if (ModelState.IsValid && user != null)
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
                        Status = true,
                        Delete = false,
                        CreatedDate = DateTime.Now,
                        DesignationName = user.DesignationName,
                        EmailConfirmed = true,
                        UserName = user.Email,
                        PasswordHash = user.Password,
                        Address = user.Address,
                        PhoneNumberConfirmed = true
                    };
                    var chkUser = await _userManager.CreateAsync(aUser, user.Password);
                    if (chkUser.Succeeded)
                    {
                        await _userManager.AddToRoleAsync(aUser, user.RoleName);
                        output.Success = true;
                        output.Message = "User created successfully!";
                        return output;
                    }
                    output.Success = false;
                    return output;
                }
                output.Message = "Error Occured";
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

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpPut]
        public async Task<object> Put([FromBody]UserEditModel user)
        {
            var output = new ResponseDetail();
            try
            {
                if (ModelState.IsValid && user != null)
                {
                    var userDetail = !string.IsNullOrEmpty(user.Id) ? await _userManager.FindByIdAsync(user.Id) : null;
                    if (userDetail != null)
                    {
                        userDetail.Id = user.Id;
                        userDetail.Email = user.Email;
                        userDetail.EmailConfirmed = true;
                        userDetail.PasswordHash = user.Password;
                        userDetail.SecurityStamp = user.SecurityStamp;
                        userDetail.PhoneNumberConfirmed = user.PhoneNumberConfirmed;
                        userDetail.TwoFactorEnabled = user.TwoFactorEnabled;
                        userDetail.LockoutEnabled = user.LockoutEnabled;
                        userDetail.AccessFailedCount = user.AccessFailedCount;
                        userDetail.TwoFactorEnabled = user.TwoFactorEnabled;
                        userDetail.UserName = user.Email;
                        userDetail.FirstName = user.FirstName;
                        userDetail.MiddelName = user.MiddelName;
                        userDetail.LastName = user.LastName;
                        userDetail.Contact = user.Contact;
                        userDetail.DesignationID = user.DesignationID;
                        userDetail.RoleID = user.RoleID;
                        userDetail.Address = user.Address;
                        userDetail.Status = user.Status;
                        userDetail.Delete = user.Delete;
                        userDetail.CreatedDate = user.CreatedDate;
                        userDetail.ModifiedDate = DateTime.Now;
                        userDetail.DesignationName = user.DesignationName;
                        userDetail.ConcurrencyStamp = user.ConcurrencyStamp;
                        userDetail.NormalizedEmail = user.NormalizedEmail;
                        userDetail.NormalizedUserName = user.NormalizedUserName;
                        userDetail.LockoutEnd = user.LockoutEnd;

                        var chkUser = await _userManager.UpdateAsync(userDetail);
                        if (chkUser.Succeeded)
                        {
                            output.Message = "User updated successfully!";
                            output.Success = true;
                            return output;
                        }
                        output.Success = false;
                        output.Message = chkUser.Errors.ToString();
                        return output;
                    }
                    output.Success = false;
                    output.Message = "Error Occured";
                    return output;
                }
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

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpDelete("{userId}")]
        public async Task<object> Delete(string userId)
        {
            var output = new ResponseDetail();
            ApplicationUser userDetail = new ApplicationUser();
            try
            {
                if (!string.IsNullOrEmpty(userId))
                {

                    userDetail = await _userManager.FindByIdAsync(userId);
                    if (userDetail != null)
                    {
                        userDetail.Delete = true;
                        var chkUser = await _userManager.UpdateAsync(userDetail);
                        if (chkUser.Succeeded)
                        {
                            output.Message = "User deleted successfully!";
                            output.Success = true;
                            return output;
                        }
                        output.Success = false;
                        output.Message = chkUser.Errors.ToString();
                        return output;
                    }
                    output.Success = false;
                    output.Message = "Error occured";
                    return output;
                }
                output.Success = false;
                //output.Message = "User Id Not Found!";
                return output;
            }
            catch (Exception ex)
            {
                output.Success = false;
                output.Message = ex.Message;
                return output;
            }
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet]
        [Route("GetById")]
        public async Task<object> GetById(string userId)
        {
            var output = new ResponseDetail();
            try
            {
                if (!string.IsNullOrEmpty(userId))
                {
                    var userDetail = await _userManager.FindByIdAsync(userId);
                    if (userDetail != null)
                    {
                        var data = Mapper.Map<UserEditModel>(userDetail);
                        output.Data = data;
                        output.Success = true;
                        return output;
                    }
                    output.Message = "Unable to find user!";
                    output.Success = false;
                    return output;
                }
                output.Message = "Error Occured";
                output.Success = false;
                return output;
            }
            catch (Exception e)
            {
                output.Success = false;
                output.Message = e.Message;
                return output;
            }
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet]
        [Route("GetAll")]
        public object GetAll()
        {
            var output = new ResponseDetail();

            try
            {
                var userList = _userService.Get().ToList();
                output.Data = userList;
                output.Success = true;
                return output;
            }
            catch (Exception e)
            {
                output.Success = false;
                output.Message = e.Message;
                return output;
            }
        }

       [Authorize(AuthenticationSchemes = "Bearer")]
       [Route("GetAllUser")]
        [HttpGet]
        public object Get()
        {
            var output = new ResponseDetail();
            try
            {
                
                var userList = _userService.GetAllUsers().ToList();
                output.Data = userList;
                output.Success = true;
                return output;
            }
            catch (Exception e)
            {
                output.Success = false;
                output.Message = e.Message;
                return output;
            }
        }
    }
}