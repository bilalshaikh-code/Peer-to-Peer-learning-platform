from rest_framework.serializers import ModelSerializer, ReadOnlyField
from .models import User, Skill, UserSkills, Session

class UserSerializers(ModelSerializer):

    class Meta:
        model = User
        fields = ['username', 'email', 'phone_number', 'total_points', 'is_valid', 'is_active', 'date_joined']

class SkillSerializers(ModelSerializer):

    class Meta:
        model = Skill
        fields = ['id', 'name', 'slug', 'created_at']
    
class UserSkillsSerializers(ModelSerializer):
    user = ReadOnlyField(source='user.username')
    skill = ReadOnlyField(source='skill.name')

    class Meta:
        model = UserSkills
        fields = ['user','skill']