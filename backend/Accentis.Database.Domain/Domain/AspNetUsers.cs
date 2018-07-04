using System;
using System.Collections.Generic;

namespace Accentis.Database.Domain.Domain
{
    public partial class AspNetUsers
    {
        public AspNetUsers()
        {
            AspNetUserClaims = new HashSet<AspNetUserClaims>();
            AspNetUserLogins = new HashSet<AspNetUserLogins>();
            AspNetUserRoles = new HashSet<AspNetUserRoles>();
            BuildingAdviceMaintenance = new HashSet<BuildingAdviceMaintenance>();
            Inspections = new HashSet<Inspections>();
            ObservedDefects = new HashSet<ObservedDefects>();
            Roof = new HashSet<Roof>();
            RoofAdviceMaintenance = new HashSet<RoofAdviceMaintenance>();
            RoofConstruction = new HashSet<RoofConstruction>();
            RoofDetailElementConditions = new HashSet<RoofDetailElementConditions>();
        }

        public string Id { get; set; }
        public string Email { get; set; }
        public bool EmailConfirmed { get; set; }
        public string PasswordHash { get; set; }
        public string SecurityStamp { get; set; }
        public string PhoneNumber { get; set; }
        public bool PhoneNumberConfirmed { get; set; }
        public bool TwoFactorEnabled { get; set; }
        public DateTime? LockoutEndDateUtc { get; set; }
        public bool LockoutEnabled { get; set; }
        public int AccessFailedCount { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string MiddelName { get; set; }
        public string LastName { get; set; }
        public string Contact { get; set; }
        public int DesignationId { get; set; }
        public string RoleId { get; set; }
        public string Address { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string DesignationName { get; set; }
        public string ConcurrencyStamp { get; set; }
        public DateTimeOffset? LockoutEnd { get; set; }
        public string NormalizedEmail { get; set; }
        public string NormalizedUserName { get; set; }

        public Designation Designation { get; set; }
        public AspNetUsers IdNavigation { get; set; }
        public AspNetRoles Role { get; set; }
        public AspNetUsers InverseIdNavigation { get; set; }
        public ICollection<AspNetUserClaims> AspNetUserClaims { get; set; }
        public ICollection<AspNetUserLogins> AspNetUserLogins { get; set; }
        public ICollection<AspNetUserRoles> AspNetUserRoles { get; set; }
        public ICollection<BuildingAdviceMaintenance> BuildingAdviceMaintenance { get; set; }
        public ICollection<Inspections> Inspections { get; set; }
        public ICollection<ObservedDefects> ObservedDefects { get; set; }
        public ICollection<Roof> Roof { get; set; }
        public ICollection<RoofAdviceMaintenance> RoofAdviceMaintenance { get; set; }
        public ICollection<RoofConstruction> RoofConstruction { get; set; }
        public ICollection<RoofDetailElementConditions> RoofDetailElementConditions { get; set; }
    }
}
