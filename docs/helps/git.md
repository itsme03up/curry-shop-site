##gitの使い方

#GitHubCLIでレポジトリを作る
  gh repo create <repo-name> --public
    --public → 公開リポジトリにする（ポートフォリオ向け）
    --private にしてもOK（練習中だけ隠したいなら）
#レポジトリをクローンしてフォルダをローカルPCに引っ張る
  git clone https://github.com/<GitHubユーザー名>/<repo-name>.git
  cd curry-shop-site
