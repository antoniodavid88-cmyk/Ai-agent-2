export default function handler(req, res) {
  const { topic } = req.body;

  const text = `🔥 Post viral sur ${topic} :

Tu n'as pas besoin de travailler plus dur.
Tu as besoin de travailler plus intelligemment.

La majorité des gens échouent parce qu'ils manquent de focus.

Commence petit, mais commence maintenant.`;

  res.status(200).json({ text });
}