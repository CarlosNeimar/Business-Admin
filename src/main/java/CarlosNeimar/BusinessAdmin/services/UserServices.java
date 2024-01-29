package CarlosNeimar.BusinessAdmin.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import CarlosNeimar.BusinessAdmin.Models.User;
// import CarlosNeimar.BusinessAdmin.repositories.BusinessRepository;
import CarlosNeimar.BusinessAdmin.repositories.UserRepository;
import jakarta.transaction.Transactional;

@Service
public class UserServices {

    @Autowired
    private UserRepository userRepository;

    // @Autowired
    // private BusinessRepository businessRepository;

    public User findid(Long id) {
        Optional<User> user = this.userRepository.findById(id);
        
        return user.orElseThrow (() -> new RuntimeException(
             "Usuario não existe! Id:" + id + "Tipo:" + User.class.getName()
             ));
    }

    @Transactional
    public User createuser(User obj) {
        obj.setId(null);
        obj = this.userRepository.save(obj);
        // this.businessRepository.saveAll(obj.getBusiness());
        return obj;
    }

    @Transactional
    public User updateuser(User obj) {
        User newobj = findid(obj.getId());
        newobj.setPassword(obj.getPassword());
        return this.userRepository.save(newobj);
    }

    @Transactional
    public void deletauser(Long id){
        findid(id); 
        try {
            this.userRepository.deleteById(id);
        } catch (Exception e) {
            throw new RuntimeException("Não foi possivel excluir esse usuario !");
        }
    }

}
