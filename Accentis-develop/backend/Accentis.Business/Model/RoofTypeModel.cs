using System;
using System.Collections.Generic;
using System.Text;

namespace Accentis.Business.Model
{
    public class RoofTypeModel
    {
        public int? RTID { get; set; }

        public string TypeName { get; set; }

        public bool Status { get; set; }

        public bool Delete { get; set; }

        public DateTime? CreatedDate { get; set; }

        public DateTime? ModifiedDate { get; set; }
    }
}
