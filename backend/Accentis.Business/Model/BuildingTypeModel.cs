using System;


namespace Accentis.Business.Model
{
    public class BuildingTypeModel
    {
        public int? BuildingTypeId { get; set; }
        public string TypeName { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
    }
}
