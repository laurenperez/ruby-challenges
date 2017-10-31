### Challenge 3 - Bank Transactions

Create a prompt that asks the user if they would like to display their balance, withdraw or deposit.
Write three methods to perform these calculations and output the result to the user. Here is a sample output:

```
Your current balance is
4000
What would you like to do? (deposit, withdraw, check_balance)
deposit
How much would you like to deposit?
1000
Your current balance is 5000
Are you done?
yes
Thank you!
```

######## SOLUTION IN RUBY ########

def calculate(bal)
  puts "Your current balance is: " + bal.to_s
  puts "what would you like to do? (deposit, withdraw, check_balance)"
  perform = gets.chomp
  if perform == "check_balance"
    puts "Your balance is "
    puts bal
  elsif perform == "deposit"
    puts "How much would you like to deposit?"
    num1 = gets.chomp
    puts "Your Balance is now:"
    puts bal + num1.to_i
  elsif perform == "withdraw"
    puts "How much would you like to withdraw?"
    num2 = gets.chomp
    puts "Your current balance is: "
    puts bal - num2.to_i
    end
  end
  puts "Are you done?"
  done = gets
  if done == "yes"
    puts "Thank you!"
end


calculate(300)
