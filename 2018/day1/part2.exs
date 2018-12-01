start = System.monotonic_time()

map_set = MapSet.new()
MapSet.put(map_set, 0)

File.stream!("./input.txt")
|> Stream.map(&String.replace(&1, "\n", ""))
|> Stream.map(&Integer.parse(&1))
|> Enum.reduce_while(0, fn {value, _}, acc ->
  new_frequency = acc + value

  if MapSet.member?(map_set, new_frequency) do
    IO.inspect('Found: ')
    {:halt, new_frequency}
  else
    {:cont, new_frequency}
  end
end)
|> IO.inspect()

finish = System.monotonic_time()
diff = finish - start
IO.inspect(diff)
