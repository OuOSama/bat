function CAL() {
  const price_arena_per_hour = document.getElementById(
    'price_arena_per_hour'
  ).value
  const price_per_hour = document.getElementById('price_per_hour').value
  const cort_amount = document.getElementById('cort_amount').value
  const price_per_ball = document.getElementById('price_per_ball').value
  const total_ball_price = document.getElementById('ball_total').value
  const total_player = document.getElementById('total_player').value

  // ARENA
  const arena_answer = price_arena_per_hour * price_per_hour * cort_amount
  const ans_arena_price = document.getElementById('ans_arena_price')
  ans_arena_price.value = arena_answer

  //Ball
  const ball_answer = price_per_ball * total_ball_price

  const ans_price_per_ball = document.getElementById('ans_price_per_ball')
  ans_price_per_ball.value = ball_answer

  // Ball H1
  const ball_h_price = document.getElementById('ball_h_price')
  ball_h_price.value = ball_answer / price_per_hour
  // Ball H2
  const arena_h_price = document.getElementById('arena_h_price')
  arena_h_price.value = (price_arena_per_hour * cort_amount) / total_player

  // Total Price
  const all_price = document.getElementById('all_price')
  all_price.value = ball_answer + arena_answer
}
