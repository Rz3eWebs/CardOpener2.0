const players = {
  matchday: [
    { name: 'K. De Bruyne', club: 'Manchester City', position: 'MID', rating: 91, flag: '🇧🇪', color: '#d94d31' },
    { name: 'M. Salah', club: 'Liverpool', position: 'FWD', rating: 90, flag: '🇪🇬', color: '#28664c' },
    { name: 'V. van Dijk', club: 'Liverpool', position: 'DEF', rating: 89, flag: '🇳🇱', color: '#2f596b' },
    { name: 'E. Haaland', club: 'Manchester City', position: 'FWD', rating: 91, flag: '🇳🇴', color: '#123c2d' },
    { name: 'Son Heung-min', club: 'Tottenham', position: 'FWD', rating: 88, flag: '🇰🇷', color: '#d94d31' },
    { name: 'Rodri', club: 'Manchester City', position: 'MID', rating: 90, flag: '🇪🇸', color: '#2f596b' },
    { name: 'B. Saka', club: 'Arsenal', position: 'FWD', rating: 87, flag: '🇬🇧', color: '#28664c' },
    { name: 'V. Junior', club: 'Real Madrid', position: 'FWD', rating: 90, flag: '🇧🇷', color: '#d94d31' },
    { name: 'Alisson', club: 'Liverpool', position: 'GK', rating: 89, flag: '🇧🇷', color: '#2f596b' },
    { name: 'M. Martinelli', club: 'Arsenal', position: 'FWD', rating: 85, flag: '🇧🇷', color: '#d94d31' },
    { name: 'D. Rice', club: 'Arsenal', position: 'MID', rating: 87, flag: '🇬🇧', color: '#28664c' },
    { name: 'M. Odegaard', club: 'Arsenal', position: 'MID', rating: 89, flag: '🇳🇴', color: '#2f596b' },
    { name: 'W. Saliba', club: 'Arsenal', position: 'DEF', rating: 87, flag: '🇫🇷', color: '#123c2d' },
    { name: 'G. Magalhaes', club: 'Arsenal', position: 'DEF', rating: 86, flag: '🇧🇷', color: '#d94d31' },
    { name: 'D. Raya', club: 'Arsenal', position: 'GK', rating: 85, flag: '🇪🇸', color: '#2f596b' },
    { name: 'B. Fernandes', club: 'Manchester United', position: 'MID', rating: 88, flag: '🇵🇹', color: '#d94d31' },
    { name: 'A. Garnacho', club: 'Manchester United', position: 'FWD', rating: 84, flag: '🇦🇷', color: '#28664c' },
    { name: 'K. Mainoo', club: 'Manchester United', position: 'MID', rating: 82, flag: '🇬🇧', color: '#2f596b' },
    { name: 'L. Martinez', club: 'Manchester United', position: 'DEF', rating: 85, flag: '🇦🇷', color: '#123c2d' }
  ],
  rising: [
    { name: 'J. Bellingham', club: 'Real Madrid', position: 'MID', rating: 90, flag: '🇬🇧', color: '#28664c' },
    { name: 'L. Yamal', club: 'Barcelona', position: 'FWD', rating: 88, flag: '🇪🇸', color: '#d94d31' },
    { name: 'J. Musiala', club: 'Bayern Munich', position: 'MID', rating: 87, flag: '🇩🇪', color: '#2f596b' },
    { name: 'K. Mbappe', club: 'Real Madrid', position: 'FWD', rating: 92, flag: '🇫🇷', color: '#123c2d' },
    { name: 'F. Wirtz', club: 'Liverpool', position: 'MID', rating: 88, flag: '🇩🇪', color: '#d94d31' },
    { name: 'Pedri', club: 'Barcelona', position: 'MID', rating: 87, flag: '🇪🇸', color: '#2f596b' },
    { name: 'P. Foden', club: 'Manchester City', position: 'MID', rating: 88, flag: '🇬🇧', color: '#28664c' },
    { name: 'C. Palmer', club: 'Chelsea', position: 'MID', rating: 86, flag: '🇬🇧', color: '#d94d31' },
    { name: 'Endrick', club: 'Real Madrid', position: 'FWD', rating: 82, flag: '🇧🇷', color: '#28664c' },
    { name: 'Gavi', club: 'Barcelona', position: 'MID', rating: 85, flag: '🇪🇸', color: '#d94d31' },
    { name: 'N. Williams', club: 'Athletic Club', position: 'FWD', rating: 86, flag: '🇪🇸', color: '#2f596b' },
    { name: 'Estevao', club: 'Chelsea', position: 'FWD', rating: 81, flag: '🇧🇷', color: '#123c2d' },
    { name: 'V. Gyokeres', club: 'Arsenal', position: 'FWD', rating: 86, flag: '🇸🇪', color: '#d94d31' },
    { name: 'G. Donnarumma', club: 'Paris Saint-Germain', position: 'GK', rating: 88, flag: '🇮🇹', color: '#28664c' },
    { name: 'A. Hakimi', club: 'Paris Saint-Germain', position: 'DEF', rating: 87, flag: '🇲🇦', color: '#2f596b' },
    { name: 'K. Kvaratskhelia', club: 'Paris Saint-Germain', position: 'FWD', rating: 86, flag: '🇬🇪', color: '#d94d31' },
    { name: 'N. Barella', club: 'Inter Milan', position: 'MID', rating: 87, flag: '🇮🇹', color: '#123c2d' },
    { name: 'A. Davies', club: 'Bayern Munich', position: 'DEF', rating: 86, flag: '🇨🇦', color: '#28664c' }
  ],
  legends: [
    { name: 'L. Messi', club: 'Inter Miami', position: 'FWD', rating: 97, flag: '🇦🇷', color: '#b88b18' },
    { name: 'C. Ronaldo', club: 'Al Nassr', position: 'FWD', rating: 96, flag: '🇵🇹', color: '#123c2d' },
    { name: 'Z. Zidane', club: 'Real Madrid', position: 'MID', rating: 95, flag: '🇫🇷', color: '#7c5830' },
    { name: 'Neymar Jr.', club: 'Santos', position: 'FWD', rating: 94, flag: '🇧🇷', color: '#b88b18' },
    { name: 'Ronaldinho', club: 'Barcelona', position: 'FWD', rating: 93, flag: '🇧🇷', color: '#123c2d' },
    { name: 'A. Iniesta', club: 'Barcelona', position: 'MID', rating: 94, flag: '🇪🇸', color: '#7c5830' },
    { name: 'Xavi', club: 'Barcelona', position: 'MID', rating: 93, flag: '🇪🇸', color: '#b88b18' },
    { name: 'G. Buffon', club: 'Juventus', position: 'GK', rating: 92, flag: '🇮🇹', color: '#123c2d' },
    { name: 'Pele', club: 'Santos', position: 'FWD', rating: 98, flag: '🇧🇷', color: '#b88b18' },
    { name: 'D. Maradona', club: 'Napoli', position: 'FWD', rating: 98, flag: '🇦🇷', color: '#7c5830' },
    { name: 'J. Cruyff', club: 'Ajax', position: 'FWD', rating: 97, flag: '🇳🇱', color: '#123c2d' },
    { name: 'F. Beckenbauer', club: 'Bayern Munich', position: 'DEF', rating: 96, flag: '🇩🇪', color: '#b88b18' },
    { name: 'Ronaldo Nazario', club: 'Real Madrid', position: 'FWD', rating: 96, flag: '🇧🇷', color: '#7c5830' },
    { name: 'T. Henry', club: 'Arsenal', position: 'FWD', rating: 95, flag: '🇫🇷', color: '#123c2d' },
    { name: 'D. Beckham', club: 'Manchester United', position: 'MID', rating: 94, flag: '🇬🇧', color: '#b88b18' },
    { name: 'S. Gerrard', club: 'Liverpool', position: 'MID', rating: 94, flag: '🇬🇧', color: '#7c5830' },
    { name: 'F. Lampard', club: 'Chelsea', position: 'MID', rating: 93, flag: '🇬🇧', color: '#123c2d' },
    { name: 'I. Casillas', club: 'Real Madrid', position: 'GK', rating: 94, flag: '🇪🇸', color: '#b88b18' },
    { name: 'G. Weah', club: 'AC Milan', position: 'FWD', rating: 92, flag: '🇱🇷', color: '#b88b18' },
    { name: 'D. Drogba', club: 'Chelsea', position: 'FWD', rating: 93, flag: '🇨🇮', color: '#7c5830' }
  ]
};
const additionalPlayers = [
  { name: 'M. Raya', club: 'Arsenal', position: 'GK', rating: 85, flag: '🇪🇸', color: '#d94d31', wiki: 'David Raya' },
  { name: 'T. Partey', club: 'Arsenal', position: 'MID', rating: 84, flag: '🇬🇭', color: '#28664c', wiki: 'Thomas Partey' },
  { name: 'B. White', club: 'Arsenal', position: 'DEF', rating: 84, flag: '🇬🇧', color: '#2f596b', wiki: 'Ben White' },
  { name: 'K. Havertz', club: 'Arsenal', position: 'FWD', rating: 84, flag: '🇩🇪', color: '#123c2d', wiki: 'Kai Havertz' },
  { name: 'L. Trossard', club: 'Arsenal', position: 'FWD', rating: 84, flag: '🇧🇪', color: '#d94d31', wiki: 'Leandro Trossard' },
  { name: 'J. Timber', club: 'Arsenal', position: 'DEF', rating: 83, flag: '🇳🇱', color: '#28664c', wiki: 'Jurrien Timber' },
  { name: 'R. Calafiori', club: 'Arsenal', position: 'DEF', rating: 82, flag: '🇮🇹', color: '#2f596b', wiki: 'Riccardo Calafiori' },
  { name: 'M. Merino', club: 'Arsenal', position: 'MID', rating: 84, flag: '🇪🇸', color: '#123c2d', wiki: 'Mikel Merino' },
  { name: 'M. Rashford', club: 'Manchester United', position: 'FWD', rating: 84, flag: '🇬🇧', color: '#d94d31', wiki: 'Marcus Rashford' },
  { name: 'M. Mount', club: 'Manchester United', position: 'MID', rating: 81, flag: '🇬🇧', color: '#28664c', wiki: 'Mason Mount' },
  { name: 'A. Onana', club: 'Manchester United', position: 'GK', rating: 82, flag: '🇨🇲', color: '#2f596b', wiki: 'Andre Onana' },
  { name: 'M. de Ligt', club: 'Manchester United', position: 'DEF', rating: 84, flag: '🇳🇱', color: '#123c2d', wiki: 'Matthijs de Ligt' },
  { name: 'J. Zirkzee', club: 'Manchester United', position: 'FWD', rating: 81, flag: '🇳🇱', color: '#d94d31', wiki: 'Joshua Zirkzee' },
  { name: 'D. Dalot', club: 'Manchester United', position: 'DEF', rating: 82, flag: '🇵🇹', color: '#28664c', wiki: 'Diogo Dalot' },
  { name: 'A. Diallo', club: 'Manchester United', position: 'FWD', rating: 80, flag: '🇨🇮', color: '#2f596b', wiki: 'Amad Diallo' },
  { name: 'M. de Ligt', club: 'Manchester United', position: 'DEF', rating: 84, flag: '🇳🇱', color: '#123c2d', wiki: 'Matthijs de Ligt' },
  { name: 'D. Nunez', club: 'Liverpool', position: 'FWD', rating: 85, flag: '🇺🇾', color: '#d94d31', wiki: 'Darwin Nunez' },
  { name: 'L. Diaz', club: 'Liverpool', position: 'FWD', rating: 86, flag: '🇨🇴', color: '#28664c', wiki: 'Luis Diaz' },
  { name: 'A. Mac Allister', club: 'Liverpool', position: 'MID', rating: 86, flag: '🇦🇷', color: '#2f596b', wiki: 'Alexis Mac Allister' },
  { name: 'T. Alexander-Arnold', club: 'Liverpool', position: 'DEF', rating: 87, flag: '🇬🇧', color: '#123c2d', wiki: 'Trent Alexander-Arnold' },
  { name: 'A. Robertson', club: 'Liverpool', position: 'DEF', rating: 85, flag: '🇬🇧', color: '#d94d31', wiki: 'Andy Robertson' },
  { name: 'D. Szoboszlai', club: 'Liverpool', position: 'MID', rating: 85, flag: '🇭🇺', color: '#28664c', wiki: 'Dominik Szoboszlai' },
  { name: 'I. Konate', club: 'Liverpool', position: 'DEF', rating: 85, flag: '🇫🇷', color: '#2f596b', wiki: 'Ibrahima Konate' },
  { name: 'C. Gakpo', club: 'Liverpool', position: 'FWD', rating: 84, flag: '🇳🇱', color: '#123c2d', wiki: 'Cody Gakpo' },
  { name: 'J. Grealish', club: 'Manchester City', position: 'MID', rating: 84, flag: '🇬🇧', color: '#d94d31', wiki: 'Jack Grealish' },
  { name: 'B. Silva', club: 'Manchester City', position: 'MID', rating: 88, flag: '🇵🇹', color: '#28664c', wiki: 'Bernardo Silva' },
  { name: 'R. Dias', club: 'Manchester City', position: 'DEF', rating: 88, flag: '🇵🇹', color: '#2f596b', wiki: 'Ruben Dias' },
  { name: 'J. Stones', club: 'Manchester City', position: 'DEF', rating: 85, flag: '🇬🇧', color: '#123c2d', wiki: 'John Stones' },
  { name: 'J. Alvarez', club: 'Atletico Madrid', position: 'FWD', rating: 87, flag: '🇦🇷', color: '#d94d31', wiki: 'Julian Alvarez' },
  { name: 'O. Dembélé', club: 'Paris Saint-Germain', position: 'FWD', rating: 88, flag: '🇫🇷', color: '#28664c', wiki: 'Ousmane Dembele' },
  { name: 'M. Vitinha', club: 'Paris Saint-Germain', position: 'MID', rating: 87, flag: '🇵🇹', color: '#2f596b', wiki: 'Vitinha (footballer)' },
  { name: 'W. Barcola', club: 'Paris Saint-Germain', position: 'FWD', rating: 85, flag: '🇫🇷', color: '#123c2d', wiki: 'Bradley Barcola' },
  { name: 'F. Ruiz', club: 'Paris Saint-Germain', position: 'MID', rating: 85, flag: '🇪🇸', color: '#d94d31', wiki: 'Fabian Ruiz' },
  { name: 'R. Lewandowski', club: 'Barcelona', position: 'FWD', rating: 90, flag: '🇵🇱', color: '#28664c', wiki: 'Robert Lewandowski' },
  { name: 'Raphinha', club: 'Barcelona', position: 'FWD', rating: 88, flag: '🇧🇷', color: '#2f596b', wiki: 'Raphinha' },
  { name: 'F. de Jong', club: 'Barcelona', position: 'MID', rating: 87, flag: '🇳🇱', color: '#123c2d', wiki: 'Frenkie de Jong' },
  { name: 'R. Araujo', club: 'Barcelona', position: 'DEF', rating: 86, flag: '🇺🇾', color: '#d94d31', wiki: 'Ronald Araujo' },
  { name: 'D. Olmo', club: 'Barcelona', position: 'MID', rating: 86, flag: '🇪🇸', color: '#28664c', wiki: 'Dani Olmo' },
  { name: 'R. Lewandowski', club: 'Barcelona', position: 'FWD', rating: 90, flag: '🇵🇱', color: '#2f596b', wiki: 'Robert Lewandowski' },
  { name: 'H. Kane', club: 'Bayern Munich', position: 'FWD', rating: 91, flag: '🇬🇧', color: '#123c2d', wiki: 'Harry Kane' },
  { name: 'M. Neuer', club: 'Bayern Munich', position: 'GK', rating: 88, flag: '🇩🇪', color: '#d94d31', wiki: 'Manuel Neuer' },
  { name: 'L. Sane', club: 'Bayern Munich', position: 'FWD', rating: 85, flag: '🇩🇪', color: '#28664c', wiki: 'Leroy Sane' },
  { name: 'K. Coman', club: 'Bayern Munich', position: 'FWD', rating: 85, flag: '🇫🇷', color: '#2f596b', wiki: 'Kingsley Coman' },
  { name: 'S. Gnabry', club: 'Bayern Munich', position: 'FWD', rating: 84, flag: '🇩🇪', color: '#123c2d', wiki: 'Serge Gnabry' },
  { name: 'J. Kimmich', club: 'Bayern Munich', position: 'MID', rating: 89, flag: '🇩🇪', color: '#d94d31', wiki: 'Joshua Kimmich' },
  { name: 'A. Griezmann', club: 'Atletico Madrid', position: 'FWD', rating: 88, flag: '🇫🇷', color: '#28664c', wiki: 'Antoine Griezmann' },
  { name: 'J. Oblak', club: 'Atletico Madrid', position: 'GK', rating: 88, flag: '🇸🇮', color: '#2f596b', wiki: 'Jan Oblak' },
  { name: 'T. Courtois', club: 'Real Madrid', position: 'GK', rating: 90, flag: '🇧🇪', color: '#123c2d', wiki: 'Thibaut Courtois' },
  { name: 'A. Rudiger', club: 'Real Madrid', position: 'DEF', rating: 87, flag: '🇩🇪', color: '#d94d31', wiki: 'Antonio Rudiger' },
  { name: 'F. Valverde', club: 'Real Madrid', position: 'MID', rating: 88, flag: '🇺🇾', color: '#28664c', wiki: 'Federico Valverde' },
  { name: 'E. Camavinga', club: 'Real Madrid', position: 'MID', rating: 85, flag: '🇫🇷', color: '#2f596b', wiki: 'Eduardo Camavinga' },
  { name: 'A. Tchouameni', club: 'Real Madrid', position: 'MID', rating: 85, flag: '🇫🇷', color: '#123c2d', wiki: 'Aurelien Tchouameni' },
  { name: 'B. Mendy', club: 'Real Madrid', position: 'DEF', rating: 86, flag: '🇫🇷', color: '#d94d31', wiki: 'Ferland Mendy' },
  { name: 'L. Martinez', club: 'Inter Milan', position: 'FWD', rating: 89, flag: '🇦🇷', color: '#28664c', wiki: 'Lautaro Martinez' },
  { name: 'H. Calhanoglu', club: 'Inter Milan', position: 'MID', rating: 87, flag: '🇹🇷', color: '#2f596b', wiki: 'Hakan Calhanoglu' },
  { name: 'M. Thuram', club: 'Inter Milan', position: 'FWD', rating: 85, flag: '🇫🇷', color: '#123c2d', wiki: 'Marcus Thuram' },
  { name: 'N. Bastoni', club: 'Inter Milan', position: 'DEF', rating: 87, flag: '🇮🇹', color: '#d94d31', wiki: 'Alessandro Bastoni' },
  { name: 'R. Leao', club: 'AC Milan', position: 'FWD', rating: 87, flag: '🇵🇹', color: '#28664c', wiki: 'Rafael Leao' },
  { name: 'P. Dybala', club: 'AS Roma', position: 'FWD', rating: 86, flag: '🇦🇷', color: '#2f596b', wiki: 'Paulo Dybala' },
  { name: 'V. Osimhen', club: 'Galatasaray', position: 'FWD', rating: 87, flag: '🇳🇬', color: '#123c2d', wiki: 'Victor Osimhen' },
  { name: 'K. De Bruyne', club: 'Manchester City', position: 'MID', rating: 91, flag: '🇧🇪', color: '#d94d31', wiki: 'Kevin De Bruyne' },
  { name: 'N. Kante', club: 'Al-Ittihad', position: 'MID', rating: 86, flag: '🇫🇷', color: '#28664c', wiki: 'N\'Golo Kante' },
  { name: 'S. Mane', club: 'Al Nassr', position: 'FWD', rating: 86, flag: '🇸🇳', color: '#2f596b', wiki: 'Sadio Mane' },
  { name: 'K. Benzema', club: 'Al-Ittihad', position: 'FWD', rating: 90, flag: '🇫🇷', color: '#123c2d', wiki: 'Karim Benzema' },
  { name: 'L. Modric', club: 'Real Madrid', position: 'MID', rating: 91, flag: '🇭🇷', color: '#b88b18', wiki: 'Luka Modric' },
  { name: 'T. Kroos', club: 'Real Madrid', position: 'MID', rating: 91, flag: '🇩🇪', color: '#7c5830', wiki: 'Toni Kroos' },
  { name: 'Sergio Ramos', club: 'Real Madrid', position: 'DEF', rating: 90, flag: '🇪🇸', color: '#123c2d', wiki: 'Sergio Ramos' },
  { name: 'Marcelo', club: 'Real Madrid', position: 'DEF', rating: 89, flag: '🇧🇷', color: '#b88b18', wiki: 'Marcelo (footballer)' },
  { name: 'Casemiro', club: 'Real Madrid', position: 'MID', rating: 89, flag: '🇧🇷', color: '#7c5830', wiki: 'Casemiro' },
  { name: 'G. Bale', club: 'Real Madrid', position: 'FWD', rating: 90, flag: '🇬🇧', color: '#123c2d', wiki: 'Gareth Bale' },
  { name: 'R. van Persie', club: 'Manchester United', position: 'FWD', rating: 91, flag: '🇳🇱', color: '#b88b18', wiki: 'Robin van Persie' },
  { name: 'W. Rooney', club: 'Manchester United', position: 'FWD', rating: 92, flag: '🇬🇧', color: '#7c5830', wiki: 'Wayne Rooney' },
  { name: 'R. Giggs', club: 'Manchester United', position: 'MID', rating: 91, flag: '🇬🇧', color: '#123c2d', wiki: 'Ryan Giggs' },
  { name: 'P. Scholes', club: 'Manchester United', position: 'MID', rating: 91, flag: '🇬🇧', color: '#b88b18', wiki: 'Paul Scholes' },
  { name: 'R. Ferdinand', club: 'Manchester United', position: 'DEF', rating: 90, flag: '🇬🇧', color: '#7c5830', wiki: 'Rio Ferdinand' },
  { name: 'P. Vieira', club: 'Arsenal', position: 'MID', rating: 91, flag: '🇫🇷', color: '#123c2d', wiki: 'Patrick Vieira' },
  { name: 'D. Bergkamp', club: 'Arsenal', position: 'FWD', rating: 92, flag: '🇳🇱', color: '#b88b18', wiki: 'Dennis Bergkamp' },
  { name: 'I. Wright', club: 'Arsenal', position: 'FWD', rating: 90, flag: '🇬🇧', color: '#7c5830', wiki: 'Ian Wright' },
  { name: 'C. Puyol', club: 'Barcelona', position: 'DEF', rating: 90, flag: '🇪🇸', color: '#123c2d', wiki: 'Carles Puyol' },
  { name: 'S. Busquets', club: 'Barcelona', position: 'MID', rating: 90, flag: '🇪🇸', color: '#b88b18', wiki: 'Sergio Busquets' },
  { name: 'D. Villa', club: 'Barcelona', position: 'FWD', rating: 91, flag: '🇪🇸', color: '#7c5830', wiki: 'David Villa' },
  { name: 'P. Lahm', club: 'Bayern Munich', position: 'DEF', rating: 91, flag: '🇩🇪', color: '#123c2d', wiki: 'Philipp Lahm' },
  { name: 'A. Robben', club: 'Bayern Munich', position: 'FWD', rating: 92, flag: '🇳🇱', color: '#b88b18', wiki: 'Arjen Robben' },
  { name: 'F. Ribery', club: 'Bayern Munich', position: 'FWD', rating: 91, flag: '🇫🇷', color: '#7c5830', wiki: 'Franck Ribery' },
  { name: 'P. Schmeichel', club: 'Manchester United', position: 'GK', rating: 91, flag: '🇩🇰', color: '#123c2d', wiki: 'Peter Schmeichel' },
  { name: 'E. Cantona', club: 'Manchester United', position: 'FWD', rating: 93, flag: '🇫🇷', color: '#b88b18', wiki: 'Eric Cantona' },
  { name: 'F. Totti', club: 'AS Roma', position: 'FWD', rating: 92, flag: '🇮🇹', color: '#7c5830', wiki: 'Francesco Totti' },
  { name: 'A. Del Piero', club: 'Juventus', position: 'FWD', rating: 92, flag: '🇮🇹', color: '#123c2d', wiki: 'Alessandro Del Piero' },
  { name: 'P. Maldini', club: 'AC Milan', position: 'DEF', rating: 94, flag: '🇮🇹', color: '#b88b18', wiki: 'Paolo Maldini' },
  { name: 'Kaka', club: 'AC Milan', position: 'MID', rating: 93, flag: '🇧🇷', color: '#7c5830', wiki: 'Kaka' },
  { name: 'R. Carlos', club: 'Real Madrid', position: 'DEF', rating: 93, flag: '🇧🇷', color: '#123c2d', wiki: 'Roberto Carlos' },
  { name: 'Cafu', club: 'AC Milan', position: 'DEF', rating: 92, flag: '🇧🇷', color: '#b88b18', wiki: 'Cafu' },
  { name: 'G. Weah', club: 'AC Milan', position: 'FWD', rating: 92, flag: '🇱🇷', color: '#7c5830', wiki: 'George Weah' },
  { name: 'E. Eto\'o', club: 'Barcelona', position: 'FWD', rating: 92, flag: '🇨🇲', color: '#123c2d', wiki: 'Samuel Eto\'o' },
  { name: 'D. Drogba', club: 'Chelsea', position: 'FWD', rating: 93, flag: '🇨🇮', color: '#b88b18', wiki: 'Didier Drogba' },
  { name: 'J. Terry', club: 'Chelsea', position: 'DEF', rating: 91, flag: '🇬🇧', color: '#7c5830', wiki: 'John Terry' },
  { name: 'P. Cech', club: 'Chelsea', position: 'GK', rating: 91, flag: '🇨🇿', color: '#123c2d', wiki: 'Petr Cech' },
  { name: 'A. Cole', club: 'Chelsea', position: 'DEF', rating: 91, flag: '🇬🇧', color: '#b88b18', wiki: 'Ashley Cole' },
  { name: 'X. Alonso', club: 'Liverpool', position: 'MID', rating: 92, flag: '🇪🇸', color: '#7c5830', wiki: 'Xabi Alonso' },
  { name: 'F. Torres', club: 'Liverpool', position: 'FWD', rating: 91, flag: '🇪🇸', color: '#123c2d', wiki: 'Fernando Torres' },
  { name: 'L. Suarez', club: 'Barcelona', position: 'FWD', rating: 93, flag: '🇺🇾', color: '#b88b18', wiki: 'Luis Suarez' },
  { name: 'A. Pirlo', club: 'Juventus', position: 'MID', rating: 93, flag: '🇮🇹', color: '#7c5830', wiki: 'Andrea Pirlo' },
  { name: 'G. Chiellini', club: 'Juventus', position: 'DEF', rating: 90, flag: '🇮🇹', color: '#123c2d', wiki: 'Giorgio Chiellini' },
  { name: 'M. Neuer', club: 'Bayern Munich', position: 'GK', rating: 92, flag: '🇩🇪', color: '#b88b18', wiki: 'Manuel Neuer' },
  { name: 'K. Rummenigge', club: 'Bayern Munich', position: 'FWD', rating: 93, flag: '🇩🇪', color: '#7c5830', wiki: 'Karl-Heinz Rummenigge' },
  { name: 'R. Gullit', club: 'AC Milan', position: 'MID', rating: 93, flag: '🇳🇱', color: '#123c2d', wiki: 'Ruud Gullit' },
  { name: 'M. van Basten', club: 'AC Milan', position: 'FWD', rating: 94, flag: '🇳🇱', color: '#b88b18', wiki: 'Marco van Basten' },
  { name: 'F. Baresi', club: 'AC Milan', position: 'DEF', rating: 93, flag: '🇮🇹', color: '#7c5830', wiki: 'Franco Baresi' },
  { name: 'R. Carlos', club: 'Real Madrid', position: 'DEF', rating: 93, flag: '🇧🇷', color: '#123c2d', wiki: 'Roberto Carlos' }
];

players.matchday.push(...additionalPlayers.slice(0, 100));

const wikiTitles = {
  'K. De Bruyne': 'Kevin De Bruyne', 'M. Salah': 'Mohamed Salah', 'V. van Dijk': 'Virgil van Dijk',
  'E. Haaland': 'Erling Haaland', 'Son Heung-min': 'Son Heung-min', Rodri: 'Rodri', 'B. Saka': 'Bukayo Saka',
  'V. Junior': 'Vinicius Junior', Alisson: 'Alisson Becker', 'J. Bellingham': 'Jude Bellingham',
  'L. Yamal': 'Lamine Yamal', 'J. Musiala': 'Jamal Musiala', 'K. Mbappe': 'Kylian Mbappe',
  'F. Wirtz': 'Florian Wirtz', Pedri: 'Pedri', 'P. Foden': 'Phil Foden', 'C. Palmer': 'Cole Palmer',
  'L. Messi': 'Lionel Messi', 'C. Ronaldo': 'Cristiano Ronaldo', 'Z. Zidane': 'Zinedine Zidane',
  'Neymar Jr.': 'Neymar', Ronaldinho: 'Ronaldinho', 'A. Iniesta': 'Andres Iniesta', Xavi: 'Xavi (footballer)',
  'G. Buffon': 'Gianluigi Buffon', 'M. Martinelli': 'Gabriel Martinelli', 'D. Rice': 'Declan Rice',
  'M. Odegaard': 'Martin Odegaard', 'W. Saliba': 'William Saliba', 'G. Magalhaes': 'Gabriel Magalhaes',
  'D. Raya': 'David Raya', 'B. Fernandes': 'Bruno Fernandes', 'A. Garnacho': 'Alejandro Garnacho',
  'K. Mainoo': 'Kobbie Mainoo', 'L. Martinez': 'Lisandro Martinez', Endrick: 'Endrick', Gavi: 'Gavi',
  'N. Williams': 'Nico Williams', Estevao: 'Estevao Willian', 'V. Gyokeres': 'Viktor Gyokeres',
  'G. Donnarumma': 'Gianluigi Donnarumma', 'A. Hakimi': 'Achraf Hakimi', 'K. Kvaratskhelia': 'Khvicha Kvaratskhelia',
  'N. Barella': 'Nicolo Barella', 'A. Davies': 'Alphonso Davies', Pele: 'Pelé', 'D. Maradona': 'Diego Maradona',
  'J. Cruyff': 'Johan Cruyff', 'F. Beckenbauer': 'Franz Beckenbauer', 'Ronaldo Nazario': 'Ronaldo',
  'T. Henry': 'Thierry Henry', 'D. Beckham': 'David Beckham', 'S. Gerrard': 'Steven Gerrard',
  'F. Lampard': 'Frank Lampard', 'I. Casillas': 'Iker Casillas'
};

const retiredPlayers = new Set([
  'Z. Zidane', 'Ronaldinho', 'A. Iniesta', 'Xavi', 'G. Buffon', 'Pele', 'D. Maradona', 'J. Cruyff',
  'F. Beckenbauer', 'Ronaldo Nazario', 'T. Henry', 'D. Beckham', 'S. Gerrard', 'F. Lampard', 'I. Casillas',
  'P. Vieira', 'D. Bergkamp', 'I. Wright', 'C. Puyol', 'S. Busquets', 'D. Villa', 'P. Lahm', 'A. Robben',
  'F. Ribery', 'P. Schmeichel', 'E. Cantona', 'F. Totti', 'A. Del Piero', 'P. Maldini', 'Kaka', 'R. Carlos',
  'Cafu', 'G. Weah', 'E. Eto\'o', 'D. Drogba', 'J. Terry', 'P. Cech', 'A. Cole', 'X. Alonso', 'F. Torres',
  'A. Pirlo', 'G. Chiellini', 'K. Rummenigge', 'R. Gullit', 'M. van Basten', 'F. Baresi'
]);

let selectedPack = 'matchday';
let collection = [];
let opened = 0;
let revealQueue = [];
let revealIndex = 0;
const packButtons = document.querySelectorAll('.pack-tile');
const modal = document.getElementById('reveal-modal');
const revealedCards = document.getElementById('revealed-cards');

packButtons.forEach((button) => {
  button.addEventListener('click', () => {
    selectedPack = button.dataset.pack;
    packButtons.forEach((item) => item.classList.toggle('selected', item === button));
  });
});

document.getElementById('open-pack').addEventListener('click', openPack);
document.getElementById('open-again').addEventListener('click', openPack);
document.getElementById('close-modal').addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target.closest('button')) return;
  if (event.target === modal || event.target.closest('.reveal-modal')) showNextCard();
});
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal(); });

async function openPack() {
  const pulled = shuffle([...players[selectedPack]]).slice(0, 10);
  await Promise.all(pulled.map(loadPlayerImage));
  revealQueue = pulled;
  revealIndex = 0;
  collection = [...pulled, ...collection].slice(0, 20);
  opened += 1;
  document.getElementById('packs-opened').textContent = opened;
  document.getElementById('collection-count').textContent = collection.length;
  document.getElementById('pull-count').textContent = `${collection.length} cards collected`;
  renderRevealCard();
  renderCollection();
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
}

function showNextCard() {
  if (revealIndex >= revealQueue.length - 1) {
    closeModal();
    return;
  }
  revealIndex += 1;
  renderRevealCard();
}

function renderRevealCard() {
  revealedCards.innerHTML = cardMarkup(revealQueue[revealIndex], true);
  document.getElementById('reveal-progress').textContent = `CARD ${revealIndex + 1} OF ${revealQueue.length}`;
}

function closeModal() {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
}

function cardMarkup(player, large = false) {
  const special = large && player.rating > 90;
  const retired = retiredPlayers.has(player.name);
  const stats = getStats(player);
  return `<article class="${large ? `reveal-card${special ? ' special-card' : ''}${retired ? ' retired-card' : ''}` : `mini-card${retired ? ' retired-card' : ''}`}" style="background:${player.color}">
    <span class="card-energy"></span>
    ${player.image ? `<img class="player-photo" src="${player.image}" alt="${player.name}" />` : ''}
    ${special ? '<span class="special-label">SPECIAL</span>' : ''}
    ${retired && large ? '<span class="retired-label">CLASSIC</span>' : ''}
    <span class="${large ? 'card-rating' : 'rating'}">${player.rating}</span>
    <span class="${large ? 'card-pos' : 'position'}">${player.position}</span>
    ${large ? '<span class="card-side-tags"><i>✦</i><i>✦</i><i>✦</i></span>' : ''}
    <span class="${large ? 'card-flag' : 'flag'}">${player.flag}</span>
    <span class="${large ? 'card-name' : 'mini-name'}">${player.name}${large ? '' : `<small>${player.club}</small>`}</span>
    ${large ? `<span class="card-club">${player.club}</span><span class="card-stats">${stats.map(([label, value]) => `<b><strong>${value}</strong><small>${label}</small></b>`).join('')}</span>` : ''}
  </article>`;
}

function getStats(player) {
  const base = player.rating;
  if (player.position === 'GK') return [['DIV', Math.min(99, base + 5)], ['HAN', Math.min(99, base + 3)], ['KIC', Math.max(70, base - 1)], ['REF', Math.min(99, base + 4)], ['SPD', Math.max(55, base - 8)], ['PHY', Math.max(60, base - 4)]];
  if (player.position === 'DEF') return [['PAC', Math.min(99, base + 2)], ['DEF', Math.min(99, base + 6)], ['PHY', Math.min(99, base + 4)], ['PAS', Math.max(70, base - 2)], ['DRI', Math.max(65, base - 5)], ['SHO', Math.max(50, base - 15)]];
  if (player.position === 'MID') return [['PAC', Math.min(99, base + 3)], ['PAS', Math.min(99, base + 6)], ['DRI', Math.min(99, base + 4)], ['SHO', Math.max(70, base - 1)], ['DEF', Math.max(50, base - 16)], ['PHY', Math.max(60, base - 6)]];
  return [['PAC', Math.min(99, base + 4)], ['SHO', Math.min(99, base + 5)], ['PAS', Math.max(70, base - 1)], ['DRI', Math.min(99, base + 6)], ['DEF', Math.max(35, base - 25)], ['PHY', Math.max(60, base - 7)]];
}

async function loadPlayerImage(player) {
  if (player.image !== undefined) return;
  const title = encodeURIComponent(player.wiki || wikiTitles[player.name] || player.name);
  try {
    const exactResponse = await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${title}&redirects=1&prop=pageimages&format=json&pithumbsize=500&origin=*`);
    const exactData = await exactResponse.json();
    const exactPage = Object.values(exactData.query.pages)[0];
    player.image = exactPage.thumbnail?.source || '';
    if (!player.image) {
      const searchResponse = await fetch(`https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${title}&gsrnamespace=0&gsrlimit=1&prop=pageimages&format=json&pithumbsize=500&origin=*`);
      const searchData = await searchResponse.json();
      const searchPage = Object.values(searchData.query?.pages || {})[0];
      player.image = searchPage?.thumbnail?.source || '';
    }
  } catch {
    player.image = '';
  }
}

function renderCollection() {
  document.getElementById('recent-pulls').innerHTML = collection.length
    ? collection.slice(0, 4).map((player) => cardMarkup(player)).join('')
    : `<div class="empty-state"><span>✦</span><p>Your next favorite player is waiting.</p><small>Open a pack to start your collection.</small></div>`;
}

function shuffle(items) {
  return items.sort(() => Math.random() - 0.5);
}
