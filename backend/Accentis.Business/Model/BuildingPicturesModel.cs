using System;

namespace Accentis.Business.Model
{
    public class BuildingPicturesModel
    {
        public int? Bpid { get; set; }
        public int BuildingId { get; set; }
        public string Picture { get; set; }
        public int DisplayOrder { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public BuildingModel Building { get; set; }
    }
}
