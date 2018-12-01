start = System.monotonic_time()

File.stream!("./input.txt")
|> Stream.map(&String.replace(&1, "\n", ""))
|> Stream.map(&Integer.parse(&1))
|> Enum.reduce_while([0], fn {value, _}, acc ->
  new_head = hd(acc) + value

  if Enum.member?(acc, new_head) do
    IO.inspect("Found: ")
    {:halt, new_head}
  else
    {:cont, [new_head | acc]}
  end
end)
|> IO.inspect()

finish = System.monotonic_time()
diff = finish - start
IO.inspect(diff)
