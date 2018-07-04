using System;

namespace Accentis.Business.Model
{
    public class BuildingModel
    {
         public int? BuildingId { get; set; }
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

        public BuildingTypeModel BuildingType { get; set; }
    }
}
