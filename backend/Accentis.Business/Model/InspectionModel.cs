using System;

namespace Accentis.Business.Model
{
    public class InspectionModel
    {
        public int? InspectionId { get; set; }
        public int BuildingId { get; set; }
        public string UserId { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public BuildingModel Building { get; set; }
        public UserEditModel User { get; set; }
    }
}
