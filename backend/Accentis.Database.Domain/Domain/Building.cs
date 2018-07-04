using System;
using System.Collections.Generic;

namespace Accentis.Database.Domain.Domain
{
    public partial class Building
    {
        public Building()
        {
            BuildingAdviceMaintenance = new HashSet<BuildingAdviceMaintenance>();
            BuildingDocument = new HashSet<BuildingDocument>();
            BuildingPictures = new HashSet<BuildingPictures>();
            ContractDuty = new HashSet<ContractDuty>();
            Inspections = new HashSet<Inspections>();
            Roof = new HashSet<Roof>();
        }

        public int BuildingId { get; set; }
        public int BuildingTypeId { get; set; }
        public string Title { get; set; }
        public string BuildingNumber { get; set; }
        public string YearOfConstruction { get; set; }
        public string ManagementCode { get; set; }
        public string ContractNumber { get; set; }
        public string Client { get; set; }
        public string Address { get; set; }
        public string ContactPerson { get; set; }
        public string Telephone { get; set; }
        public string Email { get; set; }
        public string StreetView { get; set; }
        public string Photo { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public BuildingType BuildingType { get; set; }
        public ICollection<BuildingAdviceMaintenance> BuildingAdviceMaintenance { get; set; }
        public ICollection<BuildingDocument> BuildingDocument { get; set; }
        public ICollection<BuildingPictures> BuildingPictures { get; set; }
        public ICollection<ContractDuty> ContractDuty { get; set; }
        public ICollection<Inspections> Inspections { get; set; }
        public ICollection<Roof> Roof { get; set; }
    }
}
