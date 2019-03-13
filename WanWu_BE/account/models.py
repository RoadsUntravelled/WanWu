from django.db import models
from django.contrib.auth.models import AbstractBaseUser


<<<<<<< HEAD
class UserManager(models.Manager):
    use_in_migrations = True

    def get_by_natural_key(self, username):
        return self.get(**{f"{self.model.USERNAME_FIELD}__iexact": username})


=======
>>>>>>> 3d07404caf613b9c12bd201f9f45d433995565ae
class User(AbstractBaseUser):
    user_id = models.BigAutoField(primary_key=True)
    username = models.CharField(unique=True, max_length=150)
    password = models.CharField(max_length=128)
<<<<<<< HEAD
    email = models.EmailField(unique=True)
    USERNAME_FIELD = 'username'
    EMAIL_FIELD = 'email'
    objects = UserManager()
=======
    email = models.EmailField()
>>>>>>> 3d07404caf613b9c12bd201f9f45d433995565ae

    class Meta:
        db_table = "user"


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nickname = models.TextField(null=True)

    class Meta:
        db_table = "user_profile"
