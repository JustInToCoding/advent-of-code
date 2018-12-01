start = System.monotonic_time()

File.stream!("./input.txt")
|> Stream.map(&String.replace(&1, "\n", ""))
|> Stream.map(&Integer.parse(&1))
|> Stream.cycle()
|> Enum.reduce_while({MapSet.new([0]), 0}, fn {value, _}, {map_set, frequency} ->
  new_frequency = frequency + value

  if MapSet.member?(map_set, new_frequency) do
    IO.inspect("Found: ")
    {:halt, new_frequency}
  else
    {:cont, {MapSet.put(map_set, new_frequency), new_frequency}}
  end
end)
|> IO.inspect()

finish = System.monotonic_time()
diff = finish - start
IO.inspect(diff)
