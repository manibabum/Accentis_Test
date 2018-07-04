using Accentis.Business.Contracts.Repositories.TaskMasters;
using Accentis.Business.Dal.Repositories.General;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;
using System.Linq;

namespace Accentis.Business.Dal.Repositories.TaskMasters
{
    public class TaskMastersRepository : BaseRepository<TaskMaster>, ITaskMastersRepository
    {
        public TaskMastersRepository(Accentis_NewContext context) : base(context)
        {
            Context = context;
        }

        public List<TaskMaster> GetTaskMasters()
        {
            return Context.TaskMaster.OrderByDescending(x=>x.TaskId).Where(x => x.Delete == false && x.Status == true).ToList();
        }
    }
}
