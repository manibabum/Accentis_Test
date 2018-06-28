using System;
using System.Collections.Generic;
using System.Text;

namespace Accentis.Business.Model
{
    public class RoofModel
    {
        public int? RoofId { get; set; }
        public int Rtid { get; set; }
        public int BuildingId { get; set; }
        public int InspectionId { get; set; }
        public string UserId { get; set; }
        public string RoofNumber { get; set; }
        public string Description { get; set; }
        public int Surface { get; set; }
        public int Height { get; set; }
        public string Orientation { get; set; }
        public string Access { get; set; }
        public string KeyNeeded { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public BuildingModel Building { get; set; }
        public InspectionModel Inspection { get; set; }
        public RoofTypeModel Rt { get; set; }
        public UserEditModel User { get; set; }
    }
}
