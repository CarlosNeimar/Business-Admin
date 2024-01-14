package CarlosNeimar.BusinessAdmin.Models;

import org.hibernate.annotations.ManyToAny;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import java.util.Objects;




@Entity
@Table(name = Business.TABLE_NAME)
public class Business {
    
    public static final String TABLE_NAME = "business";


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)    
    private long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "name", length = 50, nullable = false)
    @NotEmpty
    @NotNull
    @Size(min = 1, max = 50)
    private String name;

    @Column(name = "type")
    private String type;

    @Column(name = "description", length = 255, nullable = false)
    @Nonnull
    @NotEmpty
    @Size(min = 1, max = 255)
    private String description;

    @Column(name = "budget")
    private long budget;


    public Business() {
    }

    public Business(long id, User user, String name, String type, String description, long budget) {
        this.id = id;
        this.user = user;
        this.name = name;
        this.type = type;
        this.description = description;
        this.budget = budget;
    }

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public long getBudget() {
        return this.budget;
    }

    public void setBudget(long budget) {
        this.budget = budget;
    }

    public Business id(long id) {
        setId(id);
        return this;
    }

    public Business user(User user) {
        setUser(user);
        return this;
    }

    public Business name(String name) {
        setName(name);
        return this;
    }

    public Business type(String type) {
        setType(type);
        return this;
    }

    public Business description(String description) {
        setDescription(description);
        return this;
    }

    public Business budget(long budget) {
        setBudget(budget);
        return this;
    }


    // ERRO HASH and EQUALS ???

    
    // @Override
    // public int hashCode() {
    //     final int prime = 31;
    //     int result = 1;
    //     result = prime * result+ (this.id == null ? 0 : this.id.hashCode());
    //     return result;
    // }

    // @Override
    // public boolean equals(Object obj) {
    //     if (this == obj) {
    //         return true;
    //     }
    //     if (obj == null ) {
    //         return false;
    //     }
    //     if (!(obj instanceof Business)) {
    //         return false;
    //     }
    //     Business other = (Business) obj;
    //     if(this.id == null)
    //         if (other.id != null) 
    //             return false;
    //          else if (!this.id.equals(other.id)) 
    //             return false;
    //     return Objects.equals(this.id, other.id) &&
    //             Objects.equals(this.name, other.name) &&
    //             Objects.equals(this.description, other.description) &&
    //             Objects.equals(this.type, other.type) &&
    //             Objects.equals(this.budget, other.budget);
    // }

    @Override
    public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + (int) (this.id ^ (this.id >>> 32));
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
        Business other = (Business) obj;
        return this.id == other.id &&
                Objects.equals(this.name, other.name) &&
                Objects.equals(this.description, other.description) &&
                Objects.equals(this.type, other.type) &&
                Objects.equals(this.budget, other.budget);
    }

    

}
