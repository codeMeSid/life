-----

## name: meal-planner
description: Create personalized 5-day meal plans with detailed recipes for vegetarian and lacto-ovo vegetarian diets. This skill generates formatted meal plans with nutritional tracking (calories, protein, carbs, fats) and GERD-friendly meal options for users with acidity issues. Use this skill whenever a user asks for meal planning, weekly menu creation, vegetarian meal ideas with nutritional info, or wants recipes that accommodate digestive health. Includes detailed recipes with measurements, cooking times, instructions, and cooking tips.

# Vegetarian Meal Planner with Nutritional Tracking

A comprehensive meal planning skill that creates personalized 5-day meal plans for vegetarian and lacto-ovo vegetarian diets with detailed recipes and nutritional analysis.

## What This Skill Does

This skill helps users create customized meal plans by:

1. **Gathering User Information** - Collects age, weight, activity level, and dietary preferences
1. **Estimating Nutritional Needs** - Calculates daily calorie and macro (protein, carbs, fats) targets
1. **Generating 5-Day Plans** - Creates weekday meal plans with 4-5 meals per day based on GERD considerations
1. **Single-Serve Recipes** - Delivers complete recipes for 1 person only with measurements, quick cooking methods, minimal ingredients
1. **Budget-Friendly Focus** - Uses affordable vegetarian staples; daily shopping list instead of bulk buying
1. **Meal Alternatives** - Provides 2-3 alternative meal options for each meal slot (breakfast, lunch, dinner, snacks)
1. **Salad Inclusion** - Incorporates fresh salads as lighter meal alternatives and sides
1. **Tracking Macronutrients** - Shows calorie and macro breakdown for each meal and daily totals

## When to Use This Skill

- User wants a personalized meal plan for a week
- User needs meal ideas for vegetarian or egg-inclusive diets
- User wants to track calories and macronutrients
- User has GERD/acidity concerns and needs gentle meal options
- User requests detailed recipes with nutritional information
- User wants a structured eating plan for weight management or fitness

## How to Gather User Input

Ask the user for the following information:

### Essential Information

1. **Age** (in years)
1. **Current Weight** (in kg or lbs - ask which unit they prefer)
1. **Height** (in cm or inches - for BMI context)
1. **Activity Level** (sedentary, lightly active, moderately active, very active)
1. **Goal** (weight loss, maintenance, muscle building, general health)

### Dietary Preferences

1. **Vegetarian Type** - Vegetarian (no meat/fish) or Lacto-ovo vegetarian (includes eggs and dairy)
1. **Foods to Avoid** - Any specific allergies, intolerances, or preferences
1. **Cuisine Preferences** - Any preferred cuisines or dishes

### Health Considerations

1. **GERD/Acidity Severity** - None, mild, moderate, severe
1. **Other Health Notes** - Diabetes, high BP, digestive issues, etc.

-----

## Nutritional Calculations

### Basal Metabolic Rate (BMR) Estimation

Use the Mifflin-St Jeor equation:

- **For all users**: BMR = (10 × weight_kg) + (6.25 × height_cm) - (5 × age_years) ± 5 (male +5, female -5)

### Daily Calorie Needs (TDEE)

Multiply BMR by activity factor:

- Sedentary (little/no exercise): BMR × 1.2
- Lightly Active (1-3 days/week): BMR × 1.375
- Moderately Active (3-5 days/week): BMR × 1.55
- Very Active (6-7 days/week): BMR × 1.725

### Macro Distribution

Based on goal:

- **Weight Loss**: 35% protein, 35% carbs, 30% fat (high protein for satiety)
- **Maintenance**: 30% protein, 50% carbs, 20% fat (balanced)
- **Muscle Building**: 35% protein, 45% carbs, 20% fat
- **General Health**: 30% protein, 50% carbs, 20% fat

### GERD-Friendly Adjustments

- **Meal Frequency**: Recommend 4-5 smaller meals instead of 3 large ones for moderate-severe GERD
- **Meal Size**: Each meal 300-450 calories for GERD-friendly plans
- **Timing**: Last meal 2-3 hours before sleep

-----

## Meal Alternatives & Flexibility

For each meal slot, provide 2-3 alternative options so users can choose based on:

- What ingredients they have on hand
- What they’re in the mood for
- Their budget on any given day
- Their energy levels

Example format:

```
BREAKFAST OPTION 1: Oatmeal with Banana
BREAKFAST OPTION 2: Scrambled Eggs with Toast (quick)
BREAKFAST OPTION 3: Yogurt Parfait (no-cook)
```

-----

## Salad Integration

Include fresh salads as:

- **Standalone meals** (protein-rich salads with eggs, paneer, legumes)
- **Side options** (alongside heavier meals for balance)
- **Quick alternatives** (no-cook, fresh ingredients)
- **GERD-friendly versions** (vinegar-free, mild dressings)

Each salad recipe includes:

- Simple dressing options
- Protein source options
- Budget breakdown
- Can be assembled in under 10 minutes

-----

## Budget-Friendly Shopping List Format

Instead of 5-day bulk shopping, provide:

- **Core pantry items** to keep stocked (buy once, use all month)
- **Fresh items to buy daily** (vegetables, salad greens)
- **Budget-friendly alternatives** for expensive items (use dal instead of paneer, eggs instead of expensive proteins)
- **Recommendations for local/affordable sources**

Example:

```
TODAY'S SHOPPING LIST
Fresh items needed:
- Spinach
- Tomato
- Onion
- Eggs
[etc.]

From your pantry (already stocked):
- Rice
- Dal
- Oil
- Spices
```

**Budget Note:** Focus on affordable staples like eggs, dal, rice, seasonal vegetables, and paneer. Avoid expensive imported items. Buy in-season produce for lowest prices.

### Foods to INCLUDE (Gentle on Digestion)

- **Proteins**: Eggs, tofu, legumes (lentils, chickpeas), yogurt, paneer, cottage cheese
- **Vegetables**: Leafy greens, broccoli, asparagus, green beans, zucchini, cucumber, carrots (cooked)
- **Grains**: Oats, whole wheat bread, brown rice, quinoa
- **Fruits**: Bananas, apples, pears, melons (non-citrus)
- **Dairy**: Low-fat yogurt, mild cheeses, milk
- **Fats**: Olive oil (use sparingly), seeds, nuts (in moderation)

### Foods to AVOID (May Trigger Symptoms)

- Citrus fruits and juices (oranges, lemons, limes, grapefruit)
- Tomato-based dishes and sauces
- Spicy foods and excess pepper
- Fatty and fried foods
- Chocolate
- Caffeine (coffee, strong tea)
- Carbonated drinks
- Mint (can relax esophageal sphincter)
- Garlic and onions in excess
- Alcohol

-----

## Meal Plan Structure

### For Mild GERD (3 meals/day):

- Breakfast: 7-8 AM (300-400 cal)
- Lunch: 12-1 PM (400-500 cal)
- Dinner: 6-7 PM (300-400 cal)
- Total: ~1100-1300 cal (adjust to user’s needs)

### For Moderate GERD (4 meals/day):

- Breakfast: 7-8 AM (300 cal)
- Mid-morning snack: 10-11 AM (150-200 cal)
- Lunch: 1-2 PM (350-400 cal)
- Dinner: 6-7 PM (300 cal)
- Total: ~1100-1300 cal (adjust to user’s needs)

### For Severe GERD (5 meals/day):

- Breakfast: 7-8 AM (250 cal)
- Mid-morning snack: 10-11 AM (150 cal)
- Lunch: 1-2 PM (300 cal)
- Afternoon snack: 4-5 PM (150 cal)
- Dinner: 6-7 PM (250 cal)
- Total: ~1100-1300 cal (adjust to user’s needs)

-----

## Detailed Recipe Format

Each recipe should include:

```
MEAL NAME
Servings: 1 | Time: X minutes | Calories: XXX | Protein: Xg | Carbs: Xg | Fat: Xg

INGREDIENTS:
- Ingredient 1: X amount
- Ingredient 2: X amount
[etc.]

EASY INSTRUCTIONS (5-6 simple steps):
1. Step 1...
2. Step 2...
[etc.]

QUICK TIPS:
- Pro tip for quicker cooking
- Easy substitution if ingredient unavailable
- How to store leftovers

BUDGET NOTE:
- Approximate cost per serving
- Money-saving alternatives
```

**Key Requirements:**

- Single serving only
- 15-30 minutes total cooking time (no complex techniques)
- 5-8 ingredients maximum
- Common, budget-friendly items
- Minimal kitchen skills required
- Can be made fresh daily or prepped in minutes

-----

## Sample Meal Plan Output Format

```
🥗 5-DAY VEGETARIAN MEAL PLAN

User Profile:
- Age: XX | Weight: XXkg | Activity: Moderately Active
- Daily Target: ~2000 calories | Protein: 600cal (150g) | Carbs: 1000cal (250g) | Fat: 400cal (45g)
- GERD Consideration: Moderate - 4 meals/day recommended

═══════════════════════════════════════════════════════════

DAY 1: MONDAY
Daily Total: 1950 cal | Protein: 148g | Carbs: 248g | Fat: 44g

BREAKFAST (7:30 AM) - 320 cal | P: 12g | C: 45g | F: 8g
[Recipe details]

MID-MORNING SNACK (10:30 AM) - 180 cal | P: 8g | C: 25g | F: 4g
[Recipe details]

LUNCH (1:30 PM) - 450 cal | P: 18g | C: 65g | F: 12g
[Recipe details]

DINNER (7:00 PM) - 280 cal | P: 10g | C: 38g | F: 6g
[Recipe details]

═══════════════════════════════════════════════════════════

[Continue for Days 2-5]

═══════════════════════════════════════════════════════════

📊 WEEKLY SUMMARY:
Total Calories: ~9750
Avg Daily: ~1950
Total Protein: ~740g (Avg: 148g/day)
Total Carbs: ~1240g (Avg: 248g/day)
Total Fat: ~220g (Avg: 44g/day)

🛒 SHOPPING LIST:
[Organized by category with quantities for 5 days]
```

-----

## Important Notes

### Personalization

- Always ask about specific food preferences, allergies, and intolerances
- Adjust meal sizes and frequency based on GERD severity
- Offer alternatives for disliked ingredients

### Accuracy Disclaimers

- Calorie estimates are approximate and based on standard USDA data
- Individual nutritional needs vary; recommend consulting a nutritionist for specific goals
- GERD triggers vary by individual; encourage users to track their own responses

### Flexibility

- Always offer substitution options for ingredients
- Provide cooking tips for beginners
- Suggest meal prep strategies for busy schedules
- Include storage and reheating instructions

-----

## Quick Reference: Macro Calculations

For a 70kg person, moderately active, maintenance goal:

- BMR = (10 × 70) + (6.25 × 170) - (5 × 30) + 5 = 700 + 1062.5 - 150 + 5 = 1617.5 cal
- TDEE = 1617.5 × 1.55 = ~2507 cal/day
- Protein (30%): 752 cal = 188g
- Carbs (50%): 1253 cal = 313g
- Fat (20%): 501 cal = 56g

-----

## Supplement Integration

This skill can be customized for users taking supplements like whey protein, vitamins, etc.

### When to Ask About Supplements:

1. **Fitness Goals** - “Are you taking whey protein or other supplements?”
1. **Dietary Restrictions** - “Do you have any supplement preferences or requirements?”
1. **Health Considerations** - “Are you on any vitamins or protein supplements?”

### How to Incorporate Supplements:

#### Whey Protein Options:

- **Protein Shake Replacement** - Replace one meal or snack with protein shake + fruit
- **Meal Addition** - Add whey protein powder to oatmeal, yogurt, or smoothies
- **Standard serving:** 25-30g protein powder + liquid/yogurt per serving
- **Macro adjustment:** If adding 25g whey (100 cal), reduce meal calories by 100 to maintain targets

#### Vitamin/Mineral Supplements:

- **Document in meal plan** - Note which supplements user takes and when
- **Timing considerations** - Some vitamins best with food, some with water only
- **Examples:** Iron supplements, B-complex, Calcium, Magnesium

#### Example Integration:

```
BREAKFAST WITH WHEY PROTEIN OPTION
Whey Protein Smoothie Bowl
- 1/2 cup rolled oats
- 1 scoop whey protein powder (25g protein, 100 cal)
- 1/2 banana
- 1/2 cup milk
- 1 tbsp honey
- Toppings: granola, berries

Total Macros: Adjusted to maintain daily targets
Protein: Increased to 40g
Carbs: Reduced slightly to 45g (due to protein addition)
Fat: 8g
```

### Supplement Preference Questions:

- “Do you use whey protein? If yes, which flavor/brand?”
- “How much protein powder per serving?”
- “Do you prefer shake form or mix into food?”
- “Any vitamins or supplements you take daily?”
- “What are your supplement goals?” (muscle building, general health, etc.)

### Important Notes:

- Adjust recipe portions/calories if adding supplement calories
- Maintain overall daily macro targets
- Account for supplement ingredients in nutritional calculations
- Some supplements may affect digestion (relevant for GERD users)

This skill should trigger when users mention:

- “meal plan”, “weekly menu”, “meal planning”
- “vegetarian meals”, “egg-based recipes”
- “GERD-friendly”, “acidity-friendly”, “gentle digest”
- “calorie tracking”, “macro tracking”, “nutritional breakdown”
- “recipe generation”, “meal ideas with nutrition”
- “5-day plan”, “weekday meals”