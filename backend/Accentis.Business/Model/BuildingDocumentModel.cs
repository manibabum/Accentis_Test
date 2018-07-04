using System;

namespace Accentis.Business.Model
{
   public class BuildingDocumentModel
    {
        public int? DocumentId { get; set; }
        public int BuildingId { get; set; }
        public string Description { get; set; }
        public string File { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public BuildingModel Building { get; set; }
    }
}
