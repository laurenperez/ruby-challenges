### Challenge 2 - Reverse a string

# Reverse a string in place. In other words, do not create a new string or use
# other methods on the string such as `reverse`. The goal of the problem is to
# use a loop and the string accessors to figure out which values to swap for other values.
# Below is some sample output.

# ```
# Enter a string:
# reverse_me
# em_esrever
# ```

def reverse(string)
  i = string.length - 1
  string.split('')
  arr = []
  while i > -1
  arr.push(string[i])
  i -= 1
end
  puts arr.join
end

puts reverse("reverse_me")



# //IN JAVASCRIPT with Methods
# //
# // var name = "mynameislauren"
# //
# // function reverse(string){
# //     return string.split("").reverse().join("");
# // }
# //
# // reverse(name); //'nerualsiemanym'
# //
# //
# // var aString = "reverse_me"
# //
# // function reverse(string){
# //     return string.split("").reverse().join("");
# // }
# //
# // reverse(aString); // 'em_esrever'
