using Accentis.Database.Domain.Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Accentis.Database.Domain
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string MiddelName { get; set; }
        public string LastName { get; set; }
        public string Contact { get; set; }
        public string RoleID { get; set; }
        public int DesignationID { get; set; }

        public Boolean Status { get; set; }

        public Boolean Delete { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime? ModifiedDate { get; set; }
        public string DesignationName { get; set; }
        public string Address { get; set; }

        public AspNetRoles Roles { get; }

    
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
        {
        }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {

        }
        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

    }
}
