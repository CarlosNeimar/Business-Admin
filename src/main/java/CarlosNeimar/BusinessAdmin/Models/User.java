package CarlosNeimar.BusinessAdmin.Models;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.util.Objects;

@Entity
@Table(name = User.TABLE_NAME)
public class User {

    public interface Criarusuario {
    }

    public interface Updateusuario {
    }

    public static final String TABLE_NAME = "usuarios";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Long id;

    @Column(name = "username", length = 100, nullable = false, unique = true)
    @NotNull(groups = Criarusuario.class)
    @NotEmpty(groups = Criarusuario.class)
    @Size(groups = Criarusuario.class, min = 3, max = 100)
    private String username;

    @Column(name = "password", length = 50, nullable = false)
    @NotNull(groups = { Criarusuario.class, Updateusuario.class })
    @NotEmpty(groups = { Criarusuario.class, Updateusuario.class })
    @Size(groups = { Criarusuario.class, Updateusuario.class }, min = 6, max = 50)
    private String password;

    @Column(name = "type")
    private boolean type;

    // private List<Business> business = new ArrayList<Business>();

    public User() {
    }

    public User(Long id, String username, String password, boolean type) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.type = type;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isType() {
        return this.type;
    }

    public boolean getType() {
        return this.type;
    }

    public void setType(boolean type) {
        this.type = type;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + (this.id == null ? 0 : this.id.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        User user = (User) obj;
        return Objects.equals(id, user.id) &&
                Objects.equals(username, user.username) &&
                Objects.equals(password, user.password) &&
                Objects.equals(type, user.type);
    }

}
