package CarlosNeimar.BusinessAdmin.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CarlosNeimar.BusinessAdmin.Models.Business;
import CarlosNeimar.BusinessAdmin.Models.User;
import CarlosNeimar.BusinessAdmin.repositories.BusinessRepository;
import jakarta.transaction.Transactional;

@Service
public class BusinessServices {

    @Autowired
    private BusinessRepository businessRepository;

    @Autowired
    private UserServices userServices;

    public Business findid(Long id) {
        Optional<Business> business = this.businessRepository.findById(id);
        return business.orElseThrow(() -> new RuntimeException(
                "Negocio não encontrado! Id:" + id));
    }

    @Transactional
    public Business creatBusiness(Business obj) {
        User user = this.userServices.findid(obj.getUser().getId());
        obj.setId((Long) null);
        obj.setUser(user);
        obj = this.businessRepository.save(obj);
        return obj;
    }

    @Transactional
    public Business updatBusiness(Business obj){
        Business newobj = findid(obj.getId());
        newobj.setDescription(obj.getDescription());
        newobj.setBudget(obj.getBudget());
        return this.businessRepository.save(newobj);
    }

    @Transactional
    public void delete(Long id){
        findid(id);
        try {
            this.businessRepository.deleteById(id);
        } catch (Exception e) {
            throw new RuntimeException("Não foi possivel excluir esse negocio !");
        }
    }

}
