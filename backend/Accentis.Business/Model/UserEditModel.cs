using System;
using System.ComponentModel.DataAnnotations;

namespace Accentis.Business.Model
{
    public class UserEditModel
    {
        [Key]

        public string Id { get; set; }

        public string FirstName { get; set; }
        public string MiddelName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Contact { get; set; }
        public string RoleID { get; set; }
        public int DesignationID { get; set; }

        public Boolean Status { get; set; }

        public Boolean Delete { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime? ModifiedDate { get; set; }
        public string DesignationName { get; set; }

        public string SecurityStamp { get; set; }

        public bool PhoneNumberConfirmed { get; set; }

        public bool TwoFactorEnabled { get; set; }

        public bool LockoutEnabled { get; set; }

        public int AccessFailedCount { get; set; }

        public string Address { get; set; }

        public string RoleName { get; set; }

        public string ConcurrencyStamp { get; set; }

        public DateTime? LockoutEnd { get; set; }

        public string NormalizedEmail { get; set; }

        public string NormalizedUserName { get; set; }
    }
}
