from django.db import models


class Trick(models.Model):
      title = models.CharField(max_length=120)
      description = models.TextField()
      completed = models.BooleanField(default=False)

      def _str_(self):
        return self.title

# NOTE I'm going to want to have tricks as sub categories for the Main Categories: Ollies, Flips, Grinds, & Transition
    #  I'm going to want additional subcategories for variations on the specific tricks (revert, slow, fast)