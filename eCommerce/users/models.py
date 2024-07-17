from django.db import models

class Hair(models.Model):
    color = models.CharField(max_length=50)
    type = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.color} {self.type}"

class Address(models.Model):
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    stateCode = models.CharField(max_length=10)
    postalCode = models.CharField(max_length=20)
    lat = models.FloatField()
    lng = models.FloatField()
    country = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.address}, {self.city}, {self.stateCode} {self.postalCode}, {self.country}"


class Bank(models.Model):
    cardExpire = models.CharField(max_length=10)
    cardNumber = models.CharField(max_length=20)
    cardType = models.CharField(max_length=20)
    currency = models.CharField(max_length=10)
    iban = models.CharField(max_length=34)

    def __str__(self):
        return f"{self.cardType} ending in {self.cardNumber[-4:]}"

class Company(models.Model):
    department = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    address = models.OneToOneField(Address, on_delete=models.CASCADE, related_name='company_address')

    def __str__(self):
        return self.name

class Crypto(models.Model):
    coin = models.CharField(max_length=50)
    wallet = models.CharField(max_length=100)
    network = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.coin} on {self.network}"

class User(models.Model):
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    maidenName = models.CharField(max_length=100)
    age = models.IntegerField()
    gender = models.CharField(max_length=10)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    birthDate = models.DateField()
    image = models.URLField()
    bloodGroup = models.CharField(max_length=3)
    height = models.FloatField()
    weight = models.FloatField()
    eyeColor = models.CharField(max_length=50)
    hair = models.OneToOneField(Hair, on_delete=models.CASCADE)
    ip = models.GenericIPAddressField(null=True, blank=True)
    address = models.OneToOneField(Address, on_delete=models.CASCADE)
    macAddress = models.CharField(max_length=17)
    university = models.CharField(max_length=255)
    bank = models.OneToOneField(Bank, on_delete=models.CASCADE)
    company = models.OneToOneField(Company, on_delete=models.CASCADE)
    ein = models.CharField(max_length=15)
    ssn = models.CharField(max_length=11)
    userAgent = models.CharField(max_length=255)
    crypto = models.OneToOneField(Crypto, on_delete=models.CASCADE)
    role = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.firstName} {self.lastName}"
