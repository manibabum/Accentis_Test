using System;
using System.Collections.Generic;

namespace Accentis.Database.Domain.Domain
{
    public partial class BuildingPictures
    {
        public int Bpid { get; set; }
        public int BuildingId { get; set; }
        public string Picture { get; set; }
        public int DisplayOrder { get; set; }
        public bool Status { get; set; }
        public bool Delete { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }

        public Building Building { get; set; }
    }
}
