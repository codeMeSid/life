// data.js — Hardcoded 5-day GERD-friendly meal plan
// Macros per day sum to: ~1600 cal / ~148g P / ~143g C / ~50g F

export const DAILY_TARGETS = {
  cal:     1600,
  protein: 148,
  carbs:   143,
  fat:     50,
};

// Ingredient categories for shopping list
export const CATEGORIES = {
  pantry:  'Pantry staples',
  fresh:   'Fresh (buy every 2–3 days)',
  dairy:   'Dairy & eggs',
  protein: 'Protein',
};

// days[0] = Monday, days[4] = Friday
export const DAYS = [
  {
    day: 'Monday',
    short: 'Mon',
    date_index: 1, // JS getDay() value
    totals: { cal: 1600, protein: 148, carbs: 140, fat: 50 },
    meals: [
      {
        id: 'mon-breakfast',
        slot: 'breakfast',
        label: 'Breakfast',
        time: '11:30 AM',
        name: 'Moong Dal Chilla + Curd + Egg',
        cal: 420, protein: 34, carbs: 40, fat: 14,
        ingredients: [
          { name: 'Yellow moong dal', qty: '½ cup (soaked 2–3 h, ground)', category: 'pantry' },
          { name: 'Grated carrot + spinach', qty: '½ cup', category: 'fresh' },
          { name: 'Egg (whole)', qty: '1', category: 'dairy' },
          { name: 'Egg whites', qty: '2', category: 'dairy' },
          { name: 'Low-fat curd', qty: '¾ cup', category: 'dairy' },
          { name: 'Ginger, cumin, hing, salt', qty: 'pinch each', category: 'pantry' },
          { name: 'Oil', qty: '2 tsp', category: 'pantry' },
        ],
        instructions: [
          'Blend soaked moong dal with ginger + a little water to pancake batter.',
          'Mix in grated veg, cumin, hing, salt.',
          'Heat non-stick tava, ladle batter, spread thin; drizzle 1 tsp oil; cook 2–3 min/side till golden. Make 2.',
          'Boil/scramble 1 egg + 2 whites (no chili).',
          'Serve chillas with curd + the egg.',
        ],
        tip: 'Besan chilla needs no soaking — fastest option. 2 extra whites + bigger curd push protein to 34 g.',
      },
      {
        id: 'mon-lunch',
        slot: 'lunch',
        label: 'Lunch',
        time: '2:30 PM',
        name: 'No-Tomato Egg Curry + Rice',
        cal: 450, protein: 34, carbs: 50, fat: 16,
        ingredients: [
          { name: 'Eggs (boiled)', qty: '3', category: 'dairy' },
          { name: 'Egg whites (boiled)', qty: '2 extra', category: 'dairy' },
          { name: 'Low-fat curd', qty: '⅓ cup', category: 'dairy' },
          { name: 'Cooked rice', qty: '¾ cup', category: 'pantry' },
          { name: 'Ginger, cumin, coriander powder, turmeric, hing, salt', qty: 'to taste', category: 'pantry' },
          { name: 'Oil', qty: '1½ tsp', category: 'pantry' },
        ],
        instructions: [
          'Heat oil, add cumin, hing, ginger.',
          'Add turmeric + coriander powder; stir 30 sec on low.',
          'Whisk curd, lower heat, add slowly stirring (prevents curdling); add ½ cup water.',
          'Add halved boiled eggs + chopped whites; simmer 5 min, salt.',
          'Serve over rice.',
        ],
        tip: 'Curd gravy = creamy without acidic tomato. Keep flame low when adding curd.',
      },
      {
        id: 'mon-snack',
        slot: 'snack',
        label: 'Snack',
        time: '6:30 PM',
        name: 'Sprouts & Tofu Salad',
        cal: 190, protein: 18, carbs: 16, fat: 7,
        ingredients: [
          { name: 'Steamed moong sprouts', qty: '¾ cup', category: 'fresh' },
          { name: 'Tofu (firm)', qty: '90 g', category: 'protein' },
          { name: 'Cucumber + carrot', qty: '½ cup diced', category: 'fresh' },
          { name: 'Coriander, roasted cumin, salt, pepper', qty: 'to taste', category: 'pantry' },
        ],
        instructions: [
          'Steam sprouts 3–4 min (easier to digest than raw).',
          'Lightly pan-toast tofu cubes dry (2 min) or use raw.',
          'Toss with diced veg + seasoning.',
        ],
        tip: 'Steaming > raw for gastritis. Tofu keeps fat lower than paneer at this protein.',
      },
      {
        id: 'mon-whey',
        slot: 'whey',
        label: 'Whey shake',
        time: '7:30 PM',
        name: 'Whey Protein Shake',
        cal: 130, protein: 25, carbs: 4, fat: 2,
        ingredients: [
          { name: 'Fermented whey protein', qty: '1 scoop', category: 'protein' },
          { name: 'Water', qty: '250 ml', category: 'pantry' },
        ],
        instructions: ['Mix 1 scoop whey with 250 ml water. Shake well.'],
        tip: '1 scoop daily (your cap). If heavy on stomach, split into two half-scoops.',
        isWhey: true,
      },
      {
        id: 'mon-dinner',
        slot: 'dinner',
        label: 'Dinner',
        time: '9:30 PM',
        name: 'Palak Tofu + Roti',
        cal: 410, protein: 37, carbs: 30, fat: 11,
        ingredients: [
          { name: 'Spinach', qty: '2 cups (blanched + puréed)', category: 'fresh' },
          { name: 'Tofu (firm)', qty: '200 g', category: 'protein' },
          { name: 'Egg whites (optional)', qty: '2', category: 'dairy' },
          { name: 'Whole wheat roti', qty: '1', category: 'pantry' },
          { name: 'Ginger, cumin, hing, coriander powder, salt', qty: 'to taste', category: 'pantry' },
          { name: 'Oil', qty: '1 tsp', category: 'pantry' },
        ],
        instructions: [
          'Blanch spinach 2 min; blend smooth.',
          'Heat oil, add cumin, hing, ginger.',
          'Add spinach purée + coriander powder + salt; simmer 5 min.',
          'Add tofu cubes; simmer 3 min (stir in egg whites in last minute if using).',
          'Serve with 1 roti. No cream or tomato.',
        ],
        tip: '200 g tofu carries the protein here. Press tofu first for better texture.',
      },
    ],
  },

  {
    day: 'Tuesday',
    short: 'Tue',
    date_index: 2,
    totals: { cal: 1600, protein: 148, carbs: 142, fat: 50 },
    meals: [
      {
        id: 'tue-breakfast',
        slot: 'breakfast',
        label: 'Breakfast',
        time: '11:30 AM',
        name: 'Plain Dosa + Boiled Eggs + Curd',
        cal: 420, protein: 34, carbs: 44, fat: 14,
        ingredients: [
          { name: 'Dosa batter', qty: '~1 cup (2 thin dosas)', category: 'pantry' },
          { name: 'Eggs (boiled)', qty: '2', category: 'dairy' },
          { name: 'Egg whites (boiled)', qty: '3 extra', category: 'dairy' },
          { name: 'Low-fat / hung curd', qty: '¾ cup', category: 'dairy' },
          { name: 'Oil', qty: '1½ tsp', category: 'pantry' },
        ],
        instructions: [
          'Boil eggs + extra whites (8 min); peel.',
          'Heat tava, pour batter, spread thin, drizzle oil; cook till crisp; fold. Repeat for 2nd dosa.',
          'Serve dosas with boiled eggs + curd.',
        ],
        tip: 'Store-bought batter saves time. 3 extra whites + hung curd carry protein to 34 g.',
      },
      {
        id: 'tue-lunch',
        slot: 'lunch',
        label: 'Lunch',
        time: '2:30 PM',
        name: 'Tofu Curry (Curd-Based) + Roti',
        cal: 450, protein: 34, carbs: 44, fat: 16,
        ingredients: [
          { name: 'Tofu (firm)', qty: '180 g', category: 'protein' },
          { name: 'Low-fat curd', qty: '⅓ cup', category: 'dairy' },
          { name: 'Cashews (soaked)', qty: '4', category: 'pantry' },
          { name: 'Whole wheat roti', qty: '1', category: 'pantry' },
          { name: 'Ginger, cumin, coriander powder, turmeric, hing, salt', qty: 'to taste', category: 'pantry' },
          { name: 'Oil', qty: '1½ tsp', category: 'pantry' },
        ],
        instructions: [
          'Lightly pan-sear tofu cubes 3 min; set aside.',
          'Heat oil, add cumin, hing, ginger; add coriander powder + turmeric (low flame).',
          'Blend curd + cashews smooth; add off-heat with ½ cup water, stir on low.',
          'Add tofu; simmer 5 min, salt.',
          'Serve with 1 roti.',
        ],
        tip: 'Cashew-curd gravy gives richness without cream or tomato. Keep flame low.',
      },
      {
        id: 'tue-snack',
        slot: 'snack',
        label: 'Snack',
        time: '6:30 PM',
        name: 'Cucumber-Carrot + Hung Curd Dip',
        cal: 190, protein: 18, carbs: 18, fat: 6,
        ingredients: [
          { name: 'Cucumber + carrot sticks', qty: '1½ cups', category: 'fresh' },
          { name: 'Hung curd / thick low-fat yogurt', qty: '1 cup', category: 'dairy' },
          { name: 'Roasted cumin, salt, coriander', qty: 'to taste', category: 'pantry' },
        ],
        instructions: [
          'Cut veg into sticks.',
          'Mix curd with cumin, salt, coriander.',
          'Dip and eat.',
        ],
        tip: 'A full cup of hung curd (drained overnight) is high-protein and gastritis-cooling.',
      },
      {
        id: 'tue-whey',
        slot: 'whey',
        label: 'Whey shake',
        time: '7:30 PM',
        name: 'Whey Protein Shake',
        cal: 130, protein: 25, carbs: 4, fat: 2,
        ingredients: [
          { name: 'Fermented whey protein', qty: '1 scoop', category: 'protein' },
          { name: 'Water', qty: '250 ml', category: 'pantry' },
        ],
        instructions: ['Mix 1 scoop whey with 250 ml water. Shake well.'],
        tip: '1 scoop daily (your cap).',
        isWhey: true,
      },
      {
        id: 'tue-dinner',
        slot: 'dinner',
        label: 'Dinner',
        time: '9:30 PM',
        name: 'Tofu-Veg Stir-Fry + Roti',
        cal: 410, protein: 37, carbs: 32, fat: 12,
        ingredients: [
          { name: 'Tofu (firm)', qty: '200 g', category: 'protein' },
          { name: 'Capsicum + beans + zucchini', qty: '1 cup chopped', category: 'fresh' },
          { name: 'Whole wheat roti', qty: '1', category: 'pantry' },
          { name: 'Ginger, cumin, hing, black pepper, salt', qty: 'to taste', category: 'pantry' },
          { name: 'Oil', qty: '1 tsp', category: 'pantry' },
        ],
        instructions: [
          'Heat oil, add cumin + hing + ginger.',
          'Add veg; stir-fry on high 3 min (keep crunchy, easy on pepper for GERD).',
          'Add tofu; toss 3 min, salt.',
          'Serve with 1 roti.',
        ],
        tip: '200 g firm tofu = ~24 g protein for ~14 g fat. Skip chili for GERD.',
      },
    ],
  },

  {
    day: 'Wednesday',
    short: 'Wed',
    date_index: 3,
    totals: { cal: 1600, protein: 148, carbs: 142, fat: 52 },
    meals: [
      {
        id: 'wed-breakfast',
        slot: 'breakfast',
        label: 'Breakfast',
        time: '11:30 AM',
        name: 'Besan Chilla + Curd + Egg',
        cal: 420, protein: 34, carbs: 40, fat: 14,
        ingredients: [
          { name: 'Besan (gram flour)', qty: '½ cup', category: 'pantry' },
          { name: 'Grated zucchini/carrot + spinach', qty: '½ cup', category: 'fresh' },
          { name: 'Egg (whole, boiled)', qty: '1', category: 'dairy' },
          { name: 'Egg whites (boiled)', qty: '2', category: 'dairy' },
          { name: 'Low-fat / hung curd', qty: '¾ cup', category: 'dairy' },
          { name: 'Ginger, cumin, hing, salt', qty: 'to taste', category: 'pantry' },
          { name: 'Oil', qty: '2 tsp', category: 'pantry' },
        ],
        instructions: [
          'Whisk besan + water to a batter; mix in grated veg + spices.',
          'Make 2 thin chillas on non-stick tava, 1 tsp oil each.',
          'Boil 1 egg + 2 whites (8 min).',
          'Plate chillas + curd + egg.',
        ],
        tip: 'Besan needs no soaking — fastest chilla. Whites + bigger curd push protein to 34 g.',
      },
      {
        id: 'wed-lunch',
        slot: 'lunch',
        label: 'Lunch',
        time: '2:30 PM',
        name: 'Rajma + Rice + Egg',
        cal: 450, protein: 34, carbs: 56, fat: 12,
        ingredients: [
          { name: 'Boiled rajma (kidney beans)', qty: '¾ cup', category: 'pantry' },
          { name: 'Egg (boiled)', qty: '1', category: 'dairy' },
          { name: 'Egg whites', qty: '2', category: 'dairy' },
          { name: 'Low-fat curd', qty: '¼ cup', category: 'dairy' },
          { name: 'Cooked rice', qty: '¾ cup', category: 'pantry' },
          { name: 'Ginger, cumin, coriander powder, hing, salt', qty: 'to taste', category: 'pantry' },
          { name: 'Oil', qty: '1½ tsp', category: 'pantry' },
        ],
        instructions: [
          'Heat oil, add cumin, hing, ginger; add coriander powder + turmeric (low flame).',
          'Add boiled rajma + ½ cup water + salt; simmer 8 min, lightly mash some.',
          'Stir in curd off-heat for creaminess.',
          'Boil 1 egg + 2 whites alongside.',
          'Serve rajma with rice + the egg.',
        ],
        tip: 'Rajma alone is ~22 g protein here; egg + whites close the gap to 34 g. Hing + ginger reduce gas.',
      },
      {
        id: 'wed-snack',
        slot: 'snack',
        label: 'Snack',
        time: '6:30 PM',
        name: 'Boiled Eggs + Veg Sticks',
        cal: 190, protein: 18, carbs: 8, fat: 12,
        ingredients: [
          { name: 'Eggs (boiled)', qty: '2 whole', category: 'dairy' },
          { name: 'Egg whites (boiled)', qty: '2', category: 'dairy' },
          { name: 'Carrot + cucumber sticks', qty: '1 cup', category: 'fresh' },
          { name: 'Salt, pepper', qty: 'to taste', category: 'pantry' },
        ],
        instructions: [
          'Boil eggs + whites 8 min.',
          'Sprinkle salt + pepper; eat with veg sticks.',
        ],
        tip: 'Adding 2 whites lifts protein to 18 g without much extra fat.',
      },
      {
        id: 'wed-whey',
        slot: 'whey',
        label: 'Whey shake',
        time: '7:30 PM',
        name: 'Whey Protein Shake',
        cal: 130, protein: 25, carbs: 4, fat: 2,
        ingredients: [
          { name: 'Fermented whey protein', qty: '1 scoop', category: 'protein' },
          { name: 'Water', qty: '250 ml', category: 'pantry' },
        ],
        instructions: ['Mix 1 scoop whey with 250 ml water. Shake well.'],
        tip: '1 scoop daily (your cap).',
        isWhey: true,
      },
      {
        id: 'wed-dinner',
        slot: 'dinner',
        label: 'Dinner',
        time: '9:30 PM',
        name: 'Paneer Toast + Clear Veg Soup',
        cal: 410, protein: 37, carbs: 34, fat: 12,
        ingredients: [
          { name: 'Whole wheat bread', qty: '2 slices', category: 'pantry' },
          { name: 'Paneer', qty: '120 g, mashed', category: 'dairy' },
          { name: 'Egg whites', qty: '2', category: 'dairy' },
          { name: 'Capsicum + spinach', qty: '⅓ cup fine chopped', category: 'fresh' },
          { name: 'Bottle gourd (lauki) + carrot (soup)', qty: '1 cup chopped', category: 'fresh' },
          { name: 'Cumin, salt, pepper, hing', qty: 'to taste', category: 'pantry' },
          { name: 'Oil', qty: '1 tsp', category: 'pantry' },
        ],
        instructions: [
          'Mix mashed paneer + egg whites + chopped veg + spices.',
          'Spread on bread; toast/grill 6 min till set.',
          'Boil lauki + carrot with hing + pepper; lightly mash for soup.',
          'Serve toast + warm soup.',
        ],
        tip: '120 g paneer + 2 whites carry protein to 37 g. Soup soothes gastritis.',
      },
    ],
  },

  {
    day: 'Thursday',
    short: 'Thu',
    date_index: 4,
    totals: { cal: 1600, protein: 148, carbs: 148, fat: 47 },
    meals: [
      {
        id: 'thu-breakfast',
        slot: 'breakfast',
        label: 'Breakfast',
        time: '11:30 AM',
        name: 'Paneer Bhurji + 2 Toast',
        cal: 420, protein: 34, carbs: 36, fat: 16,
        ingredients: [
          { name: 'Paneer', qty: '120 g, crumbled', category: 'dairy' },
          { name: 'Egg whites', qty: '2', category: 'dairy' },
          { name: 'Capsicum + spinach', qty: '⅓ cup chopped', category: 'fresh' },
          { name: 'Whole wheat bread', qty: '2 slices (dry-toasted)', category: 'pantry' },
          { name: 'Ginger, cumin, turmeric, hing, salt', qty: 'to taste', category: 'pantry' },
          { name: 'Oil', qty: '1 tsp', category: 'pantry' },
        ],
        instructions: [
          'Heat oil, add cumin + hing + ginger.',
          'Add veg; sauté 3 min.',
          'Add turmeric + salt, then crumbled paneer + whites; toss 3 min (don\'t overcook).',
          'Dry-toast 2 bread slices.',
          'Serve bhurji with toast. Skip tomato for GERD.',
        ],
        tip: '120 g paneer + 2 whites = 34 g protein. Tofu bhurji saves ~10 g fat.',
      },
      {
        id: 'thu-lunch',
        slot: 'lunch',
        label: 'Lunch',
        time: '2:30 PM',
        name: 'Moong Dal + Rice + Boiled Eggs',
        cal: 450, protein: 34, carbs: 52, fat: 12,
        ingredients: [
          { name: 'Yellow moong dal', qty: '¾ cup (cooked soft)', category: 'pantry' },
          { name: 'Eggs (boiled)', qty: '2', category: 'dairy' },
          { name: 'Cooked rice', qty: '½ cup', category: 'pantry' },
          { name: 'Ginger, cumin, hing, turmeric, salt', qty: 'to taste', category: 'pantry' },
          { name: 'Ghee', qty: '1 tsp', category: 'pantry' },
        ],
        instructions: [
          'Pressure-cook moong dal with turmeric + salt till soft.',
          'Temper ghee + cumin + hing + ginger; pour over dal.',
          'Boil 2 eggs (8 min).',
          'Serve dal over rice with the boiled eggs.',
        ],
        tip: 'Bigger ¾-cup dal + 2 eggs = 34 g protein. Plain moong dal (no tadka chili) is very GERD-friendly.',
      },
      {
        id: 'thu-snack',
        slot: 'snack',
        label: 'Snack',
        time: '6:30 PM',
        name: 'Roasted Chana + Curd',
        cal: 190, protein: 18, carbs: 20, fat: 5,
        ingredients: [
          { name: 'Roasted chana (dry)', qty: '⅓ cup', category: 'pantry' },
          { name: 'Low-fat / hung curd', qty: '¾ cup', category: 'dairy' },
          { name: 'Roasted cumin, salt', qty: 'to taste', category: 'pantry' },
        ],
        instructions: [
          'Mix curd with cumin + salt.',
          'Eat roasted chana alongside or stirred in.',
        ],
        tip: 'No-cook, high-protein, travel-friendly. Bigger curd portion + chana = 18 g protein.',
      },
      {
        id: 'thu-whey',
        slot: 'whey',
        label: 'Whey shake',
        time: '7:30 PM',
        name: 'Whey Protein Shake',
        cal: 130, protein: 25, carbs: 4, fat: 2,
        ingredients: [
          { name: 'Fermented whey protein', qty: '1 scoop', category: 'protein' },
          { name: 'Water', qty: '250 ml', category: 'pantry' },
        ],
        instructions: ['Mix 1 scoop whey with 250 ml water. Shake well.'],
        tip: '1 scoop daily (your cap).',
        isWhey: true,
      },
      {
        id: 'thu-dinner',
        slot: 'dinner',
        label: 'Dinner',
        time: '9:30 PM',
        name: 'Paneer Dosa (Light)',
        cal: 410, protein: 37, carbs: 36, fat: 12,
        ingredients: [
          { name: 'Dosa batter', qty: '¾ cup', category: 'pantry' },
          { name: 'Paneer', qty: '130 g, crumbled', category: 'dairy' },
          { name: 'Egg whites (optional, in filling)', qty: '2', category: 'dairy' },
          { name: 'Peas + spinach', qty: '¼ cup each', category: 'fresh' },
          { name: 'Low-fat curd (side)', qty: '3 tbsp', category: 'dairy' },
          { name: 'Cumin, hing, turmeric, ginger, salt', qty: 'to taste', category: 'pantry' },
          { name: 'Oil', qty: '1½ tsp', category: 'pantry' },
        ],
        instructions: [
          'Sauté cumin, hing, ginger, peas, spinach; add crumbled paneer (+ whites) + turmeric + salt, 3 min.',
          'Make dosa on tava, drizzle oil.',
          'Place filling, fold.',
          'Serve with curd (skip tomato chutney).',
        ],
        tip: '130 g paneer filling > potato for protein + lower GI. Keep it non-spicy.',
      },
    ],
  },

  {
    day: 'Friday',
    short: 'Fri',
    date_index: 5,
    totals: { cal: 1600, protein: 148, carbs: 142, fat: 51 },
    meals: [
      {
        id: 'fri-breakfast',
        slot: 'breakfast',
        label: 'Breakfast',
        time: '11:30 AM',
        name: 'Veggie Egg Omelette + 2 Toast',
        cal: 420, protein: 34, carbs: 34, fat: 18,
        ingredients: [
          { name: 'Eggs', qty: '3', category: 'dairy' },
          { name: 'Egg whites', qty: '2 extra', category: 'dairy' },
          { name: 'Spinach + capsicum', qty: '⅓ cup chopped', category: 'fresh' },
          { name: 'Whole wheat bread', qty: '2 slices', category: 'pantry' },
          { name: 'Salt, pepper, pinch turmeric', qty: 'to taste', category: 'pantry' },
          { name: 'Oil', qty: '1½ tsp', category: 'pantry' },
        ],
        instructions: [
          'Beat eggs + whites with salt, pepper, turmeric.',
          'Heat oil, pour eggs, scatter veg.',
          'Cook 2 min/side; fold.',
          'Toast bread dry (or ½ tsp oil).',
          'Serve together.',
        ],
        tip: '3 eggs + 2 whites = 34 g protein, B12-rich. Avoid butter-loaded toast.',
      },
      {
        id: 'fri-lunch',
        slot: 'lunch',
        label: 'Lunch',
        time: '2:30 PM',
        name: 'Chana + Rice + Egg',
        cal: 450, protein: 34, carbs: 56, fat: 10,
        ingredients: [
          { name: 'Boiled chickpeas (chana)', qty: '¾ cup', category: 'pantry' },
          { name: 'Egg (boiled)', qty: '1', category: 'dairy' },
          { name: 'Egg whites', qty: '2', category: 'dairy' },
          { name: 'Low-fat curd', qty: '2 tbsp', category: 'dairy' },
          { name: 'Cooked rice', qty: '¾ cup', category: 'pantry' },
          { name: 'Ginger, cumin, coriander powder, hing, salt', qty: 'to taste', category: 'pantry' },
          { name: 'Oil', qty: '1½ tsp', category: 'pantry' },
        ],
        instructions: [
          'Heat oil, add cumin, hing, ginger; add coriander powder + turmeric (low flame).',
          'Add boiled chickpeas + ½ cup water + salt; simmer 8 min, lightly mash some.',
          'Stir in curd off-heat for creaminess.',
          'Boil 1 egg + 2 whites alongside.',
          'Serve chana with rice + the egg.',
        ],
        tip: 'Chickpeas (~11 g) + egg + whites reach 34 g. Hing + ginger + thorough cooking ease gas.',
      },
      {
        id: 'fri-snack',
        slot: 'snack',
        label: 'Snack',
        time: '6:30 PM',
        name: 'Sprouts & Tofu Bhel',
        cal: 190, protein: 18, carbs: 18, fat: 7,
        ingredients: [
          { name: 'Steamed mixed sprouts', qty: '¾ cup', category: 'fresh' },
          { name: 'Tofu (firm)', qty: '90 g', category: 'protein' },
          { name: 'Cucumber + carrot + coriander', qty: '½ cup', category: 'fresh' },
          { name: 'Roasted cumin, salt, pepper', qty: 'to taste', category: 'pantry' },
        ],
        instructions: [
          'Steam sprouts 3 min.',
          'Toss with tofu, veg, seasoning. Skip tamarind/spicy chutney for GERD.',
        ],
        tip: '90 g tofu lifts this to 18 g protein. Steamed sprouts are gentler on gastritis.',
      },
      {
        id: 'fri-whey',
        slot: 'whey',
        label: 'Whey shake',
        time: '7:30 PM',
        name: 'Whey Protein Shake',
        cal: 130, protein: 25, carbs: 4, fat: 2,
        ingredients: [
          { name: 'Fermented whey protein', qty: '1 scoop', category: 'protein' },
          { name: 'Water', qty: '250 ml', category: 'pantry' },
        ],
        instructions: ['Mix 1 scoop whey with 250 ml water. Shake well.'],
        tip: '1 scoop daily (your cap).',
        isWhey: true,
      },
      {
        id: 'fri-dinner',
        slot: 'dinner',
        label: 'Dinner',
        time: '9:30 PM',
        name: 'Egg Bhurji + Roti',
        cal: 410, protein: 37, carbs: 30, fat: 14,
        ingredients: [
          { name: 'Eggs', qty: '3', category: 'dairy' },
          { name: 'Egg whites', qty: '3 extra', category: 'dairy' },
          { name: 'Capsicum + spinach', qty: '½ cup chopped', category: 'fresh' },
          { name: 'Whole wheat roti', qty: '1', category: 'pantry' },
          { name: 'Ginger, cumin, turmeric, hing, salt', qty: 'to taste', category: 'pantry' },
          { name: 'Oil', qty: '1 tsp', category: 'pantry' },
        ],
        instructions: [
          'Heat oil, add cumin + hing + ginger.',
          'Add veg; sauté 3 min.',
          'Beat eggs + whites; pour in, scramble soft with turmeric + salt (no chili).',
          'Serve with 1 roti. Skip tomato for GERD.',
        ],
        tip: '3 eggs + 3 whites = ~37 g protein while fat stays moderate.',
      },
    ],
  },
];

// Aggregated shopping list derived from all 5 days
export function getShoppingList() {
  const seen = new Map();
  for (const day of DAYS) {
    for (const meal of day.meals) {
      for (const ing of meal.ingredients) {
        const key = ing.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
        if (!seen.has(key)) {
          seen.set(key, { ...ing, key });
        }
      }
    }
  }
  const items = Array.from(seen.values());
  // Group by category
  const groups = {};
  for (const item of items) {
    const cat = item.category;
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(item);
  }
  return groups;
}

// Get today's day index (0 = Mon … 4 = Fri, weekend → 0)
export function getTodayIndex() {
  const jsDay = new Date().getDay(); // 0=Sun … 6=Sat
  if (jsDay === 0 || jsDay === 6) return 0; // weekend → Monday
  return jsDay - 1; // Mon=0 … Fri=4
}
