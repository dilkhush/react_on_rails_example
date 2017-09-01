10.times { |index| Todo.create!(name: "TODO#{index}", description: "I am a description of TODO#{index}.", status: ((index % 2 == 0) ? true : false)) }
