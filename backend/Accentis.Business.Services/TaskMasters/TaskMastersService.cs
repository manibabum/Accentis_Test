using Accentis.Business.Contracts.Services.TaskMasters;
using Accentis.Business.Dal;
using Accentis.Database.Domain.Domain;
using System.Collections.Generic;

namespace Accentis.Business.Services.TaskMasters
{
    public class TaskMastersService : ITaskMastersService
    {
        public void CreateTaskMaster(TaskMaster taskMaster)
        {
            using (var unitOfWork=new UnitOfWork())
            {
                unitOfWork.TaskMastersRepository.Insert(taskMaster);
                unitOfWork.TaskMastersRepository.Save();
            }    
        }

        public List<TaskMaster> Get()
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.TaskMastersRepository.Get();
            }
        }

        public TaskMaster GetTaskMaster(int id)
        {
            using (var unitOfWork = new UnitOfWork())
            {
                return unitOfWork.TaskMastersRepository.Get(id);
            }
        }

        public List<TaskMaster> GetTaskMasters()
        {
            using (var unitOfWork=new UnitOfWork())
            {
                return unitOfWork.TaskMastersRepository.GetTaskMasters();
            }
        }

        public void UpdateTaskMaster(TaskMaster taskMaster)
        {
            using (var unitOfWork=new UnitOfWork())
            {
                unitOfWork.TaskMastersRepository.Update(taskMaster);
                unitOfWork.TaskMastersRepository.Save();
            }
        }
    }
}
